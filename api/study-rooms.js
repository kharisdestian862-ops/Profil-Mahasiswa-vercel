// api/study-rooms.js
import { Server } from "socket.io";

// Simpan active rooms di memory
const activeRooms = new Map();

function generateRoomCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default function handler(req, res) {
  // Untuk Vercel, kita perlu setup Socket.io secara khusus
  if (req.method === "POST") {
    const { action, roomCode, roomName, userId } = req.body;

    switch (action) {
      case "create-room":
        const newRoomCode = generateRoomCode();
        const room = {
          id: newRoomCode,
          name: roomName,
          createdBy: userId,
          participants: [userId],
          createdAt: new Date(),
        };
        activeRooms.set(newRoomCode, room);
        return res.status(200).json({ success: true, room });

      case "join-room":
        const existingRoom = activeRooms.get(roomCode);
        if (!existingRoom) {
          return res
            .status(404)
            .json({ success: false, error: "Room tidak ditemukan" });
        }
        if (!existingRoom.participants.includes(userId)) {
          existingRoom.participants.push(userId);
        }
        return res.status(200).json({ success: true, room: existingRoom });

      case "get-room":
        const roomToGet = activeRooms.get(roomCode);
        return res.status(200).json({ success: true, room: roomToGet });

      default:
        return res
          .status(400)
          .json({ success: false, error: "Action tidak valid" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
