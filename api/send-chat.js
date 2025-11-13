import Pusher from "pusher";

// Inisialisasi Pusher dengan kunci dari Environment Variables
// Pastikan Anda sudah memasukkan kunci ini di Vercel Settings
const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

export default async function handler(req, res) {
  // Hanya izinkan metode POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { username, message, timestamp } = req.body;

  try {
    await pusher.trigger("campus-chat", "new-message", {
      username: username,
      message: message,
      timestamp: timestamp || new Date().toLocaleTimeString(),
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Pusher Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
}
