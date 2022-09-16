import { useEffect, useState } from "react";

import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";

import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";
import { GameBanner } from "./components/GameBanner";

import logoImage from "./assets/logo-nlw-esports.svg";
import "./styles/tailwind.css";

interface IGame {
  id: number;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

export function App() {
  const [games, setGames] = useState<IGame[]>([]);

  useEffect(() => {
    try {
      axios("http://localhost:3333/games").then((response) =>
        setGames(response.data)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImage} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game) => (
          <GameBanner
            key={game.id}
            bannerUrl={game.bannerUrl}
            title={game.title}
            adsCount={game._count.ads}
          />
        ))}
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}
