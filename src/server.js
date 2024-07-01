import express from "express";

const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`${PORT} 포트에서 작동 되나연?`))