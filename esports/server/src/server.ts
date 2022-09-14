import express, { Request, Response } from "express";

const app = express();

app.get("/games", (req: Request, res: Response) => {
  res.status(200).json({ games: ["game1", "game2"] });
});

app.post("/ads", (req: Request, res: Response) => {
  res.status(200).json([]);
});

app.get("/games/:id/ads", (req: Request, res: Response) => {
  //const gameId = req.params.id;
  res.status(200).send("Hello World!");
});

app.get("/games/:id/discord", (req: Request, res: Response) => {
  //const adId = req.params.id;
  res.status(200).send("Hello World!");
});

app.listen(3333, () => {
  console.log("Server is running on port 3333");
});
