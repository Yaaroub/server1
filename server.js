import dotenv from "dotenv";
dotenv.config();
import express from "express";
const server = express();
const port = process.env.PORT || 4789;
import productsRouter from "./routes/productsRouter.js";

server.use(express.json());
server.use("/api/products",  productsRouter);

server.use((error, req, res, next) => {
  console.error(error);
  res.status(500).end();
});

server.listen(port, () => console.log(`${port} ist on running`));
