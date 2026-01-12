import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
// This line tells Express to serve everything in the "public" folder automatically
app.use(express.static(path.join(__dirname, "public")));// This explicitly sends index.html when someone visits the main URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

const port = 3000;
app.listen(port, () => {
    console.log(` Server is live at http://localhost:${port}`);
});
