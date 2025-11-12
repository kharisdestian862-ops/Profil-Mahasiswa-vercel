// api/study-rooms.js - FINAL SIGNALLING SERVER

// Gunakan Map untuk menyimpan status room secara in-memory (sementara)
const activeRooms = new Map();

function generateRoomCode() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

// Handler utama Vercel Serverless Function
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
    const data = req.body; // Vercel sudah parse JSON untuk kita

    // Pastikan req.body adalah objek
    if (!data || typeof data !== "object") {
      return res
        .status(400)
        .json({ success: false, error: "Invalid JSON body" });
    }

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
          // Menyimpan signaling data per koneksi
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
        // Mengembalikan status room dan daftar peserta (kecuali diri sendiri)
        return res.json({
          success: true,
          room: roomToJoin,
          participants: roomToJoin.participants.filter((id) => id !== userId),
        });

      case "get-participants":
        const roomParts = activeRooms.get(roomCode);
        // Mengembalikan daftar peserta kecuali diri sendiri
        const participants = roomParts
          ? roomParts.participants.filter((id) => id !== userId)
          : [];
        return res.json({ success: true, participants });

      case "store-offer":
        const roomOffer = activeRooms.get(roomCode);
        if (roomOffer) {
          // Menyimpan tawaran yang ditujukan untuk targetUserId
          roomOffer.offers[targetUserId] = {
            sdp: offer.sdp,
            type: offer.type,
            userId: userId,
          };
          console.log(`Offer stored for ${targetUserId} by ${userId}`);
        }
        return res.json({ success: true });

      case "get-offer":
        const roomGetOffer = activeRooms.get(roomCode);
        // Mengambil tawaran yang ditujukan untuk kita (userId)
        const offerData = roomGetOffer?.offers[userId];
        if (roomGetOffer && offerData) {
          // Hapus setelah diambil (agar tidak dikirim berulang)
          delete roomGetOffer.offers[userId];
        }
        return res.json({ success: true, offer: offerData });

      case "store-answer":
        const roomAnswer = activeRooms.get(roomCode);
        if (roomAnswer) {
          // Menyimpan jawaban yang ditujukan untuk targetUserId
          roomAnswer.answers[targetUserId] = {
            sdp: answer.sdp,
            type: answer.type,
            userId: userId,
          };
          console.log(`Answer stored for ${targetUserId} by ${userId}`);
        }
        return res.json({ success: true });

      case "get-answer":
        const roomGetAnswer = activeRooms.get(roomCode);
        // Mengambil jawaban yang ditujukan untuk kita (userId)
        const answerData = roomGetAnswer?.answers[userId];
        if (roomGetAnswer && answerData) {
          delete roomGetAnswer.answers[userId];
        }
        return res.json({ success: true, answer: answerData });

      case "store-candidate":
        const roomCandidate = activeRooms.get(roomCode);
        if (roomCandidate) {
          // Menyimpan kandidat yang ditujukan untuk targetUserId
          if (!roomCandidate.candidates[targetUserId]) {
            roomCandidate.candidates[targetUserId] = [];
          }
          roomCandidate.candidates[targetUserId].push(candidate);
        }
        return res.json({ success: true });

      case "get-candidates":
        const roomGetCandidates = activeRooms.get(roomCode);
        // Mengambil kandidat yang ditujukan untuk kita (userId)
        const candidates = roomGetCandidates?.candidates[userId] || [];
        if (roomGetCandidates?.candidates[userId]) {
          // Hapus kandidat setelah diambil
          roomGetCandidates.candidates[userId] = [];
        }
        return res.json({ success: true, candidates });

      case "leave-room":
        const roomLeave = activeRooms.get(roomCode);
        if (roomLeave) {
          roomLeave.participants = roomLeave.participants.filter(
            (id) => id !== userId
          );
          // Hapus semua data signaling milik user yang keluar
          Object.values(roomLeave.offers).forEach((offer) => {
            if (offer.userId === userId) delete roomLeave.offers[userId];
          });
          Object.values(roomLeave.answers).forEach((answer) => {
            if (answer.userId === userId) delete roomLeave.answers[userId];
          });

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
    return res
      .status(500)
      .json({
        success: false,
        error: error.message || "Internal Server Error",
      });
  }
}
