export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const { message } = await request.json();
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return response
      .status(500)
      .json({ error: "API key tidak diatur di server" });
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

    const data = await groqResponse.json();
    response.status(200).json(data);
  } catch (error) {
    response
      .status(500)
      .json({ error: "Gagal mengambil data dari Groq: " + error.message });
  }
}
