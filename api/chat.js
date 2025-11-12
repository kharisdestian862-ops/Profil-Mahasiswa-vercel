import fetch from "node-fetch";

export default async function handler(request, response) {
  // Handle CORS
  response.setHeader("Access-Control-Allow-Credentials", true);
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  response.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (request.method === "OPTIONS") {
    return response.status(200).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { message, context, language } = request.body;

    // Validasi input
    if (!message) {
      return response.status(400).json({ error: "Pesan tidak boleh kosong" });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      console.error("DEEPSEEK_API_KEY tidak ditemukan");
      return response.status(500).json({
        error: "Konfigurasi API key belum lengkap",
      });
    }

    let systemPrompt;

    if (language === "id") {
      systemPrompt =
        "Anda adalah Asdos (Asisten Dashboard) yang ramah dan membantu. Jawab pertanyaan mahasiswa dalam Bahasa Indonesia dengan singkat dan jelas. Nama pengguna adalah Kharis Destian Maulana.";
      if (context) {
        systemPrompt += `\n\nKonteks: ${context}`;
      }
    } else {
      systemPrompt =
        "You are Asdos (Dashboard Assistant), a friendly and helpful assistant. Answer the student's questions in English clearly and concisely. The user's name is Kharis Destian Maulana.";
      if (context) {
        systemPrompt += `\n\nContext: ${context}`;
      }
    }

    console.log("Mengirim request ke DeepSeek API...");

    const deepseekResponse = await fetch(
      "https://api.deepseek.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            {
              role: "system",
              content: systemPrompt,
            },
            {
              role: "user",
              content: message,
            },
          ],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      }
    );

    if (!deepseekResponse.ok) {
      const errorText = await deepseekResponse.text();
      console.error("DeepSeek API error:", errorText);
      throw new Error(`DeepSeek API error: ${deepseekResponse.status}`);
    }

    const data = await deepseekResponse.json();
    console.log("DeepSeek response received");

    return response.status(200).json(data);
  } catch (error) {
    console.error("Error in chat handler:", error);
    return response.status(500).json({
      error: `Terjadi kesalahan: ${error.message}`,
    });
  }
}
