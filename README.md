# ðŸ§® Node.js Calculator with History

A clean, responsive web calculator built with **Node.js**, **Express**, and **Vanilla JavaScript**. This project features a dynamic history tracking system that clears itself on command.

## âœ¨ Features
* **Real-time Calculations:** Powered by JavaScript's math engine.
* **Smart History:** Tracks your last 5 calculations.
* **Conditional UI:** The "Delete History" button only appears when there is at least 1 entry (Logic: 1=1 clear history).
* **Responsive Design:** Works on desktop and mobile browsers.

## ðŸš€ Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v14 or higher)

### Installation
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/node-calc.git](https://github.com/your-username/node-calc.git)

```

2. Install dependencies:
```bash
npm install

```


3. Start the server:
```bash
npm run dev

```


4. Open your browser to http://localhost:3000

## ðŸ› ï¸ Tech Stack

* **Backend:** Node.js, Express
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)

## ðŸ“œ Logic Highlight

The history visibility is controlled by a state-check in script.js:

```javascript
function renderHistory() {
    clearHistoryBtn.style.display = (history.length >= 1) ? "block" : "none";
}
```
