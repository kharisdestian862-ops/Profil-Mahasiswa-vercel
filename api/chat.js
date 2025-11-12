export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  const { message, context, language } = request.body;
  const apiKey = process.env.GROQ_API_KEY;

  if (!apiKey) {
    return response
      .status(500)
      .json({ error: "API key tidak diatur di server" });
  }

  let systemPrompt;

  if (language === "id") {
    systemPrompt =
      "Anda adalah Asdos (Asisten Dashboard) yang ramah dan membantu. Jawab pertanyaan mahasiswa dalam Bahasa Indonesia dengan singkat dan jelas.";
    if (context) {
      systemPrompt += `\n\nData yang relevan untuk pertanyaan ini adalah: "${context}". Gunakan data ini untuk merumuskan jawaban Anda. Jika data ini adalah jawaban lengkap (seperti sapaan atau IPK), cukup sampaikan kembali dengan cara yang ramah.`;
    } else {
      systemPrompt +=
        "\n\nTidak ada data spesifik yang diberikan, jawab pertanyaan ini secara umum.";
    }
  } else {
    systemPrompt =
      "You are Asdos (Dashboard Assistant), a friendly and helpful assistant. Answer the student's questions in English clearly and concisely.";
    if (context) {
      systemPrompt += `\n\nRelevant data for this question is: "${context}". Use this data to formulate your answer. If this data is a complete answer (like a greeting or GPA), just deliver it in a friendly way.`;
    } else {
      systemPrompt +=
        "\n\nNo specific data was provided; answer this question generally.";
    }
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
          model: "llama-3.1-8b-instant",
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
