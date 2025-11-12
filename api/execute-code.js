import fetch from "node-fetch";

// Mapping bahasa frontend ke runtime ID Piston API
const languageMapping = {
  python: "python",
  javascript: "javascript",
  cpp: "cpp",
  java: "java",
  csharp: "csharp",
  // Piston tidak mendukung HTML secara langsung, ini harus ditangani di frontend.
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
    const runtime = languageMapping[language];

    if (!runtime) {
      return res.status(400).json({
        success: false,
        error: `Language ${language} not supported by executor.`,
      });
    }

    // Data yang dikirim ke Piston API
    const payload = {
      language: runtime,
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

    // 3. Format Output
    if (data.run && data.run.output) {
      let output = data.run.output;
      if (data.run.stderr) {
        output = `--- ERROR ---\n${data.run.stderr}\n\n${output}`;
      }
      return res.status(200).json({ success: true, output: output });
    } else {
      return res.status(200).json({
        success: false,
        error: data.message || "Execution failed or API returned an error.",
      });
    }
  } catch (error) {
    console.error("Executor API Error:", error);
    return res.status(500).json({
      success: false,
      error: "Internal server error during execution.",
    });
  }
}
