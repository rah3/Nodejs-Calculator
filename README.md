# Node.js Calculator with History

A clean, responsive web calculator built with **Node.js**, **Express**, and **Vanilla JavaScript**. This project features a dynamic history tracking system that clears itself on command.

## Features
* **Real-time Calculations:** Powered by JavaScript's math engine.
* **Smart History:** Tracks your last 5 calculations.
* **Conditional UI:** The "Delete History" button only appears when there is at least 1 entry (Logic: 1=1 clear history).
* **Responsive Design:** Works on desktop and mobile browsers.

## Getting Started

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

## Tech Stack

* **Backend:** Node.js, Express
* **Frontend:** HTML5, CSS3, JavaScript (ES6+)

## Logic Highlight

The history visibility is controlled by a state-check in script.js:

```javascript
function renderHistory() {
    clearHistoryBtn.style.display = (history.length >= 1) ? "block" : "none";
}
```

## Encoding

This project uses **UTF-8 encoding** throughout.

- Line endings are enforced as **LF** via `.gitattributes`
- PowerShell output/input is expected to be **UTF-8**
- Emojis and Unicode characters are supported

### PowerShell (Windows)

If emojis do not render correctly, ensure UTF-8 is enabled:

```powershell
[Console]::InputEncoding  = [System.Text.Encoding]::UTF8
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
chcp 65001
```

You should see:

```makefile
modified: README.md
```

Then commit:

```makefile
git add README.md
git commit -m "Docs: document UTF-8 encoding and emoji support"
```