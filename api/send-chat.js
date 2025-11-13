import Pusher from "pusher";

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // 1. Terima socketId dari frontend
  const { username, message, timestamp, socketId } = req.body;

  try {
    // 2. Kirim ke Pusher dengan parameter ke-4: socketId
    // Ini akan mencegah pesan dikirim balik ke pengirim (browser yang sama)
    await pusher.trigger(
      "campus-chat",
      "new-message",
      {
        username,
        message,
        timestamp:
          timestamp ||
          new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
      },
      socketId // <--- INI KUNCINYA
    );

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Pusher Error:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
}
