import express from "express";
import derivRouter from "./routes/derivRouter.js";

const app = express();
const port = process.env.PORT || 5000;


app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "POST, PUT, GET, DELETE");
  next();
});
app.use("/guesser", derivRouter);
app.use("/", (req, res) => res.send("Welcome to the Email Guesser API"));
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);