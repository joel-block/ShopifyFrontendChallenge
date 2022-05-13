const API_URL = "https://api.openai.com/v1/engines/text-curie-001/completions";
const API_KEY = process.env.REACT_APP_API_KEY;

export async function sendPrompt(prompt) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      }),
    });
    const data = await response.json();
    const {
      choices: [{ text }],
    } = data;
    return text;
  } catch (error) {
    throw error;
  }
}
