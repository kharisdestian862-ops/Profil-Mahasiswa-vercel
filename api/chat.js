import fetch from 'node-fetch';

export default async function handler(request, response) {
  console.log('=== OPENROUTER API CALLED ===');
  
  // CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');
  
  if (request.method === 'OPTIONS') {
    return response.status(200).end();
  }

  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, context, language = 'id' } = await request.json();

    if (!message) {
      return response.status(400).json({ error: 'Message is required' });
    }

    const apiKey = process.env.DEEPSEEK_API_KEY; // Tetap pakai nama variabel ini
    
    if (!apiKey) {
      console.error('DEEPSEEK_API_KEY is missing');
      return response.status(500).json({ error: 'Server configuration error - API key missing' });
    }

    // System prompt untuk OpenRouter
    const systemPrompt = language === 'id' 
      ? `Anda adalah Asdos (Asisten Dashboard) yang ramah dan membantu. Jawab pertanyaan mahasiswa dalam Bahasa Indonesia dengan singkat dan jelas. Nama pengguna adalah Kharis Destian Maulana.${context ? `\n\nKonteks: ${context}` : ''}`
      : `You are Asdos (Dashboard Assistant), a friendly and helpful assistant. Answer the student's questions in English clearly and concisely. The user's name is Kharis Destian Maulana.${context ? `\n\nContext: ${context}` : ''}`;

    console.log('Calling OpenRouter API...');
    
    // Call OpenRouter API (bukan DeepSeek langsung)
    const openRouterResponse = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://your-domain.vercel.app', // Ganti dengan domain Anda
        'X-Title': 'UCIC Dashboard'
      },
      body: JSON.stringify({
        model: 'deepseek/deepseek-chat', // Model melalui OpenRouter
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user', 
            content: message
          }
        ],
        max_tokens: 1000,
        temperature: 0.7
      })
    });

    console.log('OpenRouter response status:', openRouterResponse.status);
    
    if (!openRouterResponse.ok) {
      const errorText = await openRouterResponse.text();
      console.error('OpenRouter API error:', errorText);
      throw new Error(`OpenRouter API error: ${openRouterResponse.status} - ${errorText}`);
    }

    const data = await openRouterResponse.json();
    console.log('OpenRouter response received successfully');
    
    return response.status(200).json(data);
    
  } catch (error) {
    console.error('Error in chat API:', error);
    return response.status(500).json({ 
      error: `Internal server error: ${error.message}` 
    });
  }
}
