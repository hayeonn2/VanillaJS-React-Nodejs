import express from "express";
import api from "./api";

const app = express();
const PORT = 5000;

// app.use를 통해 사용자가 "localhost:5000/api"에 접속시, api를 불러오도록 함
app.use("/api", api); 
app.listen(PORT, () => console.log(`${PORT} 포트에서 작동 되나연?`));