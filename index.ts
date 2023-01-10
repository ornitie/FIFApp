import express from "express";
import { FutbinResource } from "./resources/FutbinResource";
const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  const x = await FutbinResource.getPlayerStats({
    playerName: "Messi",
    nation: "54",
  });

  res.send(x);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
