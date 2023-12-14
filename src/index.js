import { fileURLToPath } from "url";
import { dirname } from "path";
import express from "express";
import path from "path";
import multer from "multer";

const app = express();
// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Resto del código...
const storage = multer.diskStorage({
  destination: path.join(__dirname, "/uploads"),
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
app.use(
  multer({
    storage,
    dest: path.join(__dirname, "/uploads"),
  }).single("image")
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/upload", (req, res) => {
  res.send("Subido");
});
export default app;

app.listen(3000, () => {
  console.log("Server on port 3000");
});
