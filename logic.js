
document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const character = document.getElementById("character");
  const quote = document.getElementById("quote");
  const opt1 = document.getElementById("opt1");
  const opt2 = document.getElementById("opt2");
  const opt3 = document.getElementById("opt3");

  fetch("data/quotes.json")
    .then(res => res.json())
    .then(data => {
      const time = new Date().getHours();
      let quotes = [];

      if (time < 11) quotes = data.morning;
      else if (time < 15) quotes = data.lunch;
      else if (time < 20) quotes = data.evening;
      else quotes = data.night;

      const entry = quotes[Math.floor(Math.random() * quotes.length)];
      if (!entry) return;

      character.textContent = entry.character;
      quote.textContent = entry.quote;
      opt1.textContent = entry.options[0].text;
      opt2.textContent = entry.options[1].text;
      opt3.textContent = entry.options[2].text;

      opt1.onclick = () => alert(entry.options[0].response);
      opt2.onclick = () => alert(entry.options[1].response);
      opt3.onclick = () => alert(entry.options[2].response);
    });
});
