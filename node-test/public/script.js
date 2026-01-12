const display = document.getElementById("display");
const buttons = document.querySelectorAll("button[data-value]");
const clearBtn = document.getElementById("clear");
const equalsBtn = document.getElementById("equals");
const historyList = document.getElementById("history-list");
const clearHistoryBtn = document.getElementById("clear-history");

let history = [];

// 1. Button Input Logic
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const val = button.getAttribute("data-value");
        if (display.innerText === "0") display.innerText = val;
        else display.innerText += val;
    });
});

// 2. Clear Calculator Display
clearBtn.addEventListener("click", () => {
    display.innerText = "0";
});

// 3. Delete History Action
clearHistoryBtn.addEventListener("click", () => {
    history = [];
    renderHistory();
});

// 4. Calculation Logic
equalsBtn.addEventListener("click", () => {
    const equation = display.innerText;
    try {
        const result = eval(equation);
        display.innerText = result;
        addToHistory(`${equation} = ${result}`);
    } catch {
        display.innerText = "Error";
    }
});

// 5. Helper Functions
function addToHistory(entry) {
    history.unshift(entry);
    if (history.length > 5) history.pop();
    renderHistory();
}

function renderHistory() {
    // Sync Button Visibility
    if (history.length >= 1) {
        clearHistoryBtn.style.display = "block";
    } else {
        clearHistoryBtn.style.display = "none";
    }

    // Sync History List Text
    if (history.length === 0) {
        historyList.innerHTML = "<p style='color:#888; font-size:12px;'>No history yet</p>";
    } else {
        historyList.innerHTML = history
            .map(item => `<div class="history-item">${item}</div>`)
            .join("");
    }
}

// 6. Initialize UI on Load
renderHistory();