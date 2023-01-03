import express from "express";
import { FutbinService } from "./services/FutBinService";
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const x = await FutbinService.getPlayerStats();

  res.send(x);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
