
let quotesData = {};
fetch("quotes.json")
  .then((res) => res.json())
  .then((data) => {
    quotesData = data;
    initQuote();
  });

function initQuote() {
  const hour = new Date().getHours();
  let period = "morning";
  if (hour >= 11 && hour < 15) period = "lunch";
  else if (hour >= 17 && hour < 21) period = "evening";
  else if (hour >= 21 || hour < 3) period = "night";

  const roleKeys = Object.keys(quotesData[period]);
  const randomRole = roleKeys[Math.floor(Math.random() * roleKeys.length)];
  const roleData = quotesData[period][randomRole];
  const quote = roleData[Math.floor(Math.random() * roleData.length)];

  document.getElementById("avatar").src = randomRole + ".png";
  document.getElementById("charName").innerText = roleNameMap[randomRole];
  document.getElementById("emoji").innerText = roleEmojiMap[randomRole];
  document.getElementById("quote").innerText = quote.text;

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.innerText = quote.options[i];
    btn.onclick = () => {
      document.getElementById("options").classList.add("hidden");
      document.getElementById("response-box").classList.remove("hidden");
      document.getElementById("response-text").innerText = quote.responses[i];
    };
  });

  document.getElementById("options").classList.remove("hidden");
}

document.getElementById("back-btn").onclick = () => {
  document.getElementById("response-box").classList.add("hidden");
  initQuote();
};

const roleNameMap = {
  "mingling": "冥鈴",
  "loyi": "洛伊",
  "rinshen": "燐聲",
  "seir": "星耀"
};

const roleEmojiMap = {
  "mingling": "🌙",
  "loyi": "☀️",
  "rinshen": "☁️",
  "seir": "🐶"
};
