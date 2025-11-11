export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  let message;
  try {
    const body = await request.json();
    message = body.message;

    if (!message) {
      return response
        .status(400)
        .json({ error: "Pesan (message) tidak ditemukan di body request" });
    }
  } catch (e) {
    return response
      .status(400)
      .json({ error: "Gagal mem-parsing request body JSON" });
  }

  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return response
      .status(500)
      .json({
        error:
          "GROQ_API_KEY tidak diatur di server Vercel. Cek Environment Variables.",
      });
  }

  try {
    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3-8b-8192",
          messages: [
            {
              role: "system",
              content:
                "Anda adalah Asdos (Asisten Dashboard) yang ramah dan membantu. Jawab pertanyaan mahasiswa dengan singkat dan jelas.",
            },
            {
              role: "user",
              content: message,
            },
          ],
        }),
      }
    );

    if (!groqResponse.ok) {
      const errorData = await groqResponse.json();
      return response.status(groqResponse.status).json({
        error:
          "Error dari Groq: " + (errorData.error?.message || "Unknown error"),
        details: errorData,
      });
    }

    const data = await groqResponse.json();
    response.status(200).json(data);
  } catch (error) {
    response
      .status(500)
      .json({ error: "Gagal fetch ke Groq: " + error.message });
  }
}
