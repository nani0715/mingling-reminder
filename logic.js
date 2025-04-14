
let quotesData = {};
fetch("quotes.json")
  .then((response) => response.json())
  .then((data) => {
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

  const quotes = quotesData[period];
  if (!quotes || quotes.length === 0) {
    document.getElementById("quote").innerText = "語錄啟動中…（這個時段還沒有語錄喔）";
    return;
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = quote.text;
  document.getElementById("options").classList.remove("hidden");

  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach((btn, i) => {
    btn.innerText = quote.options[i];
    btn.onclick = () => {
      document.getElementById("quote").innerText = quote.responses[i];
      document.getElementById("options").classList.add("hidden");
    };
  });
}
