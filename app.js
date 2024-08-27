import express from "express";
import db from "./config/mongoose.js";
import path from "path";
import expressLayout from "express-ejs-layouts";
import indexRouter from "./routes/index.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import dotenv from "dotenv";
import helmet from "helmet";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set view engine and views directory
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

// Extract style and scripts from subpages to layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./assets")));
app.use(expressLayout);
app.use(helmet()); // Adds security headers

// Routes
app.use("/", indexRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Port where server listens
app.listen(port, (err) => {
  if (err) {
    console.error(`Error in starting the server: ${err}`);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
