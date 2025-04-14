
let quotesData = {};
fetch("quotes.json")
  .then((response) => response.json())
  .then((data) => {
    quotesData = data;
    initQuote();
  });

function initQuote() {
  let period = "morning"; // 固定測試用
  const quotes = quotesData[period];
  if (!quotes || quotes.length === 0) {
    document.getElementById("quote").innerText =
      "語錄啟動中…（這個時段還沒有語錄喔）";
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
