import fetch from "node-fetch";

// Mapping bahasa frontend ke runtime ID dan versi Piston API
const languageMapping = {
  python: { runtime: "python", version: "3.10.0" }, // Menggunakan versi Python stabil
  javascript: { runtime: "javascript", version: "18.15.0" }, // Node.js versi stabil
  cpp: { runtime: "c++", version: "10.2.0" },
  java: { runtime: "java", version: "15.0.2" },
  csharp: { runtime: "csharp", version: "6.12.0" },
  html: { runtime: "html", version: "5.0.0" }, // HTML/5
};

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, error: "Method Not Allowed" });
  }

  try {
    const { language, code } = req.body;
    const runtimeInfo = languageMapping[language];

    if (!runtimeInfo) {
      return res
        .status(400)
        .json({
          success: false,
          error: `Language ${language} not supported by executor.`,
        });
    }

    // Data yang dikirim ke Piston API, sekarang menyertakan version
    const payload = {
      language: runtimeInfo.runtime,
      version: runtimeInfo.version, // Mengirim versi sebagai string (SOLUSI)
      files: [{ content: code }],
    };

    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (data.run && data.run.output) {
      let output = data.run.output;
      if (data.run.stderr) {
        output = `--- ERROR ---\n${data.run.stderr}\n\n${output}`;
      }
      return res.status(200).json({ success: true, output: output });
    } else {
      // Jika ada error dari Piston (misalnya kode syntax error)
      return res
        .status(200)
        .json({
          success: false,
          error: data.message || "Execution failed or API returned an error.",
        });
    }
  } catch (error) {
    console.error("Executor API Error:", error);
    return res
      .status(500)
      .json({
        success: false,
        error: "Internal server error during execution.",
      });
  }
}
