const messages = [
"Happy Valentine’s Day ❤️",
"You are my favorite person 💕",
"I love your smile 😘",
"You make my world brighter ✨",
"My heart is yours 💖",
"You are my safe place 🫶",
"I adore you so much 🥰",
"You complete me ❤️",
"I’m lucky to have you 💘",
"You’re my forever 💞",
"With you, I feel home 🏡",
"You’re my biggest blessing 🙏",
"I love you more every day 🌹",
"You’re my happiness 😊",
"My heart beats for you 💓",
"You’re my dream come true 🌙",
"I cherish you always 💗",
"You are my peace 🕊️",
"My love grows daily 🌸",
"You are my sunshine ☀️",
"I choose you always 💍",
"You make me stronger 💪",
"You are my everything ❤️",
"I trust you completely 🤍",
"You make life beautiful 🌷",
"My favorite hello 😍",
"My hardest goodbye 😢",
"I’m proud of you 💖",
"You mean the world to me 🌎",
"Forever yours 💕"
];

const container = document.getElementById("cards-container");

messages.forEach(text => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerText = text;
  container.appendChild(card);
});
