
fetch("quotes.json")
  .then(response => response.json())
  .then(data => {
    const currentHour = new Date().getHours();
    let period = "morning";
    if (currentHour >= 12 && currentHour < 17) period = "lunch";
    else if (currentHour >= 17 && currentHour < 21) period = "evening";
    else if (currentHour >= 21 || currentHour < 5) period = "night";

    const name = "星耀";
    const quotes = data[period][name];
    const selected = quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("quote-text").innerText = selected.text;
    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";
    const responseDiv = document.getElementById("response");
    responseDiv.innerText = "";

    selected.options.forEach((opt, idx) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => {
        responseDiv.innerText = selected.responses[idx];
        optionsDiv.innerHTML = "";
        document.getElementById("back-btn").style.display = "block";
      };
      optionsDiv.appendChild(btn);
    });

    document.getElementById("back-btn").onclick = () => {
      location.reload();
    };
});
