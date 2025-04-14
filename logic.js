
fetch("quotes.json")
    .then(response => response.json())
    .then(data => {
        const period = "lunch"; // 固定時段測試
        const characters = Object.keys(data[period]);
        const currentChar = characters[Math.floor(Math.random() * characters.length)];
        const quotes = data[period][currentChar];
        const selected = quotes[Math.floor(Math.random() * quotes.length)];

        document.getElementById("avatar").src = "assets/" + currentChar + ".png";
        document.getElementById("charName").innerText = currentChar;
        document.getElementById("quote-text").innerText = selected.text;

        const optionsDiv = document.getElementById("options");
        selected.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.textContent = opt;
            btn.onclick = () => {
                document.getElementById("response").innerText = selected.responses[idx];
            };
            optionsDiv.appendChild(btn);
        });
    });
