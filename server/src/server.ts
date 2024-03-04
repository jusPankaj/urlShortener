import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConfig";
import shortUrl from "./routes/shortUrl";

// to fetch values from my dotenv file
dotenv.config();
connectDB();

const port = process.env.PORT || 5001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(
  cors({
    origin: "https://localhost:3000", // Which domains we allow to access our API
    credentials: true,
  })
);

app.use("/api/", shortUrl);

app.listen(port, () => {
  console.log(`Server is up and running on ${port}`);
});

