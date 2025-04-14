document.addEventListener("DOMContentLoaded", () => {
    const loader = document.getElementById("loader");
    const app = document.getElementById("app");
    const quoteText = document.getElementById("quote-text");
    const optionsContainer = document.getElementById("options");

    fetch("quotes.json")
        .then(res => res.json())
        .then(data => {
            const now = new Date();
            const hour = now.getHours();
            let period = "morning";
            if (hour >= 11 && hour < 15) period = "lunch";
            else if (hour >= 15 && hour < 20) period = "evening";
            else if (hour >= 20 || hour < 5) period = "night";

            const quotes = data[period];
            if (!quotes || quotes.length === 0) {
                quoteText.textContent = "（這個時段還沒有語錄喔）";
                return;
            }

            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            quoteText.textContent = randomQuote.quote;

            optionsContainer.innerHTML = "";
            randomQuote.options.forEach(opt => {
                const btn = document.createElement("button");
                btn.textContent = opt.text;
                btn.className = "option-btn";
                btn.addEventListener("click", () => {
                    quoteText.textContent = opt.response;
                    optionsContainer.innerHTML = "";
                });
                optionsContainer.appendChild(btn);
            });

            loader.classList.add("hidden");
            app.classList.remove("hidden");
        })
        .catch(err => {
            quoteText.textContent = "讀取語錄時發生錯誤。";
            console.error(err);
        });
});