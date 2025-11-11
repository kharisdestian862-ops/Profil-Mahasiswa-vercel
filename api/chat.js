export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  let message;
  let context;
  try {
    const body = request.body;
    message = body.message;
    context = body.context;

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
    return response.status(500).json({
      error:
        "GROQ_API_KEY tidak diatur di server Vercel. Cek Environment Variables.",
    });
  }

  // --- LOGIKA PROMPT BARU ---
  // Kita buat prompt sistem dan prompt pengguna secara dinamis

  let systemPrompt =
    "Anda adalah Asdos (Asisten Dashboard) yang ramah dan membantu. Jawab pertanyaan mahasiswa dengan singkat dan jelas.";
  let userPrompt = message;

  // Jika frontend mengirim data konteks, kita gabungkan ke dalam prompt
  if (context) {
    systemPrompt +=
      "\n\nSelalu gunakan data yang ada di bagian 'KONTEKS' untuk menjawab pertanyaan pengguna. Jangan mengarang data jika data tidak ada di konteks. Selalu jawab dalam bahasa yang sama dengan bahasa di 'PERTANYAAN SAYA'.";

    // Stringify data konteks agar rapi
    const contextString = JSON.stringify(context, null, 2);

    userPrompt = `KONTEKS:
${contextString}

PERTANYAAN SAYA:
${message}`;
  }
  // --- AKHIR LOGIKA PROMPT BARU ---

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
              content: userPrompt,
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
