import { Client } from "pg";

export default async function handler(request, response) {
  if (request.method !== "GET") {
    return response.status(405).json({ error: "Method Not Allowed" });
  }

  // Menggunakan POSTGRES_URL yang sudah ada di Environment Variables
  const client = new Client({
    connectionString: process.env.POSTGRES_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });

  try {
    await client.connect();

    // Ambil data dari tabel courses
    const coursesResult = await client.query(
      "SELECT course_key, name, code, credits, current_week FROM courses;"
    );
    const coursesData = coursesResult.rows;

    const formattedData = {};
    for (const course of coursesData) {
      formattedData[course.course_key] = {
        name: course.name,
        code: course.code,
        // Pastikan konversi tipe data yang benar dari DB ke JS
        credits: parseInt(course.credits),
        currentWeek: parseInt(course.current_week),

        // Data kosong agar frontend tidak error
        meetings: [],
        tasks: [],
        materials: [],
      };
    }

    response.status(200).json(formattedData);
  } catch (error) {
    console.error("Database Error:", error);
    response.status(200).json({
      error_message:
        "Gagal memuat data dari database. Menggunakan data statis darurat.",
    });
  } finally {
    if (client && client._connected) {
      // Pastikan koneksi terputus
      await client.end();
    }
  }
}
