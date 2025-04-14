
let quotesData = {};
fetch("quotes.json")
  .then(response => response.json())
  .then(data => {
    quotesData = data;
    initQuote();
  });

function initQuote() {
  const now = new Date();
  const hour = now.getHours();
  let period = "morning";
  if (hour >= 11 && hour < 15) period = "lunch";
  else if (hour >= 17 && hour < 21) period = "evening";
  else if (hour >= 21 || hour < 3) period = "night";

  const characters = Object.keys(quotesData[period]);
  const selectedChar = characters[Math.floor(Math.random() * characters.length)];
  const quotes = quotesData[period][selectedChar];
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  document.getElementById("avatar").src = `assets/${selectedChar}.png`;
  document.getElementById("charName").innerText = quote.name;
  document.getElementById("emoji").innerText = quote.emoji;
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
  document.getElementById("response-box").classList.add("hidden");

  document.getElementById("back-btn").onclick = () => initQuote();
}
