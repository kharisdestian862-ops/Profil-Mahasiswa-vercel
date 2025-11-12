// api/study-rooms.js - UPDATE COMPLETE
const activeRooms = new Map();

function generateRoomCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export default async function handler(req, res) {
  // CORS headers
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

    const {
      action,
      roomCode,
      roomName,
      userId,
      offer,
      answer,
      candidate,
      targetUserId,
    } = data;

    console.log(`API Action: ${action}, Room: ${roomCode}, User: ${userId}`);

    switch (action) {
      case "create-room":
        const newRoomCode = generateRoomCode();
        const room = {
          id: newRoomCode,
          name: roomName,
          createdBy: userId,
          participants: [userId],
          offers: {},
          answers: {},
          candidates: {},
        };
        activeRooms.set(newRoomCode, room);
        console.log(`Room created: ${newRoomCode}`);
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
        console.log(`User ${userId} joined room ${roomCode}`);
        return res.json({
          success: true,
          room: roomToJoin,
          participants: roomToJoin.participants,
        });

      case "get-participants":
        const roomParts = activeRooms.get(roomCode);
        const participants = roomParts
          ? roomParts.participants.filter((id) => id !== userId)
          : [];
        return res.json({ success: true, participants });

      case "store-offer":
        const roomOffer = activeRooms.get(roomCode);
        if (roomOffer) {
          roomOffer.offers[userId] = offer;
          console.log(`Offer stored for ${userId} in ${roomCode}`);
        }
        return res.json({ success: true });

      case "get-offer":
        const roomGetOffer = activeRooms.get(roomCode);
        const offerData = roomGetOffer?.offers[targetUserId];
        return res.json({ success: true, offer: offerData });

      case "store-answer":
        const roomAnswer = activeRooms.get(roomCode);
        if (roomAnswer) {
          roomAnswer.answers[userId] = answer;
          console.log(`Answer stored for ${userId} in ${roomCode}`);
        }
        return res.json({ success: true });

      case "get-answer":
        const roomGetAnswer = activeRooms.get(roomCode);
        const answerData = roomGetAnswer?.answers[targetUserId];
        return res.json({ success: true, answer: answerData });

      case "store-candidate":
        const roomCandidate = activeRooms.get(roomCode);
        if (roomCandidate) {
          if (!roomCandidate.candidates[userId]) {
            roomCandidate.candidates[userId] = [];
          }
          roomCandidate.candidates[userId].push(candidate);
          console.log(`ICE candidate stored for ${userId}`);
        }
        return res.json({ success: true });

      case "get-candidates":
        const roomGetCandidates = activeRooms.get(roomCode);
        const candidates = roomGetCandidates?.candidates[targetUserId] || [];
        // Clear candidates setelah diambil
        if (roomGetCandidates?.candidates[targetUserId]) {
          roomGetCandidates.candidates[targetUserId] = [];
        }
        return res.json({ success: true, candidates });

      case "leave-room":
        const roomLeave = activeRooms.get(roomCode);
        if (roomLeave) {
          roomLeave.participants = roomLeave.participants.filter(
            (id) => id !== userId
          );
          delete roomLeave.offers[userId];
          delete roomLeave.answers[userId];
          delete roomLeave.candidates[userId];

          if (roomLeave.participants.length === 0) {
            activeRooms.delete(roomCode);
            console.log(`Room ${roomCode} deleted (empty)`);
          }
          console.log(`User ${userId} left room ${roomCode}`);
        }
        return res.json({ success: true });

      default:
        return res.json({ success: false, error: "Action tidak valid" });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.json({ success: false, error: error.message });
  }
}
