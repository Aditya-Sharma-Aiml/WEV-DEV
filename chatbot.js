const API_KEY =
  "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";

const MODEL = "mistralai/mistral-7b-instruct";

let conversationHistory = [
  {
    role: "system",
    content:
      "You are a caring, emotionally intelligent AI friend. Always respond empathetically based on the user's mood.",
  },
];

// Basic sentiment detector (simple version)
function detectSentiment(text) {
  text = text.toLowerCase();
  if (
    text.includes("sad") ||
    text.includes("worthless") ||
    text.includes("depressed") ||
    text.includes("tired")
  )
    return "sad";
  if (
    text.includes("happy") ||
    text.includes("excited") ||
    text.includes("great")
  )
    return "happy";
  if (text.includes("angry") || text.includes("frustrated")) return "angry";
  return "neutral";
}

async function sendMessage() {
  const inputField = document.getElementById("user-input");
  const userMessage = inputField.value.trim();
  if (!userMessage) return;

  displayMessage(userMessage, "user");
  inputField.value = "";

  // Detect sentiment
  const mood = detectSentiment(userMessage);

  // Add user message with detected mood
  conversationHistory.push({
    role: "user",
    content: `Mood detected: ${mood}. Message: ${userMessage}`,
  });

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: MODEL,
          messages: conversationHistory,
        }),
      }
    );

    const data = await response.json();
    const botReply =
      data?.choices?.[0]?.message?.content ||
      "I'm here for you, even if words fail right now.";

    displayMessage(botReply, "bot");

    // Add bot reply to memory
    conversationHistory.push({ role: "assistant", content: botReply });
  } catch (error) {
    displayMessage("Error: " + error.message, "bot");
  }
}

function displayMessage(text, sender) {
  const chatBox = document.getElementById("chat-box");
  const messageElem = document.createElement("div");
  messageElem.className = sender === "user" ? "user-message" : "bot-message";
  messageElem.textContent = text;
  chatBox.appendChild(messageElem);
}



