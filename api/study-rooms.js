// api/study-rooms.js
const activeRooms = new Map();

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    let body = "";
    for await (const chunk of req) {
      body += chunk;
    }
    const data = JSON.parse(body);

    const { action, roomCode, roomName, userId, offer, answer, candidate } =
      data;

    switch (action) {
      case "create-room":
        const newRoomCode = generateRoomCode();
        const room = {
          id: newRoomCode,
          name: roomName,
          createdBy: userId,
          participants: [],
          offers: new Map(),
          answers: new Map(),
          candidates: new Map(),
        };
        activeRooms.set(newRoomCode, room);
        return res.json({
          success: true,
          room: { id: newRoomCode, name: roomName },
        });

      case "join-room":
        const roomToJoin = activeRooms.get(roomCode);
        if (!roomToJoin) {
          return res.json({ success: false, error: "Room tidak ditemukan" });
        }
        if (!roomToJoin.participants.includes(userId)) {
          roomToJoin.participants.push(userId);
        }
        return res.json({ success: true, room: roomToJoin });

      case "get-participants":
        const roomParts = activeRooms.get(roomCode);
        return res.json({
          success: true,
          participants: roomParts?.participants || [],
        });

      case "store-offer":
        const roomOffer = activeRooms.get(roomCode);
        if (roomOffer) {
          roomOffer.offers.set(userId, offer);
        }
        return res.json({ success: true });

      case "store-answer":
        const roomAnswer = activeRooms.get(roomCode);
        if (roomAnswer) {
          roomAnswer.answers.set(userId, answer);
        }
        return res.json({ success: true });

      case "get-offer":
        const roomGetOffer = activeRooms.get(roomCode);
        const offerData = roomGetOffer?.offers.get(userId);
        return res.json({ success: true, offer: offerData });

      case "get-answer":
        const roomGetAnswer = activeRooms.get(roomCode);
        const answerData = roomGetAnswer?.answers.get(userId);
        return res.json({ success: true, answer: answerData });

      default:
        return res.json({ success: false, error: "Action tidak valid" });
    }
  } catch (error) {
    return res.json({ success: false, error: error.message });
  }
}

function generateRoomCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
