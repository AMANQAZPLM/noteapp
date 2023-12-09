import express from "express";
import { addPost, deletePost, getPost, updatePost } from "./controller/crud.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.post("/api/content", addPost);
app.delete("/api/content/:id", deletePost);
app.put("/api/content", updatePost);
app.get("/api/content", getPost);

app.listen(8800, () => {
  console.log("server running");
});
