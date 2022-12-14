import { FormEvent, useEffect, useMemo, useState } from "react";

import * as Checkbox from "@radix-ui/react-checkbox";
import * as Dialog from "@radix-ui/react-dialog";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

import axios from "axios";
import { Check, GameController } from "phosphor-react";
import { Input } from "./Form/Input";

interface IGame {
  id: number;
  title: string;
}

interface IWeekDayToggleProps {
  value: string;
  day: string;
  title: string;
}

export const CreateAdModal = () => {
  const [games, setGames] = useState<IGame[]>([]);
  const [selectedWeekDays, setSelectedWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState(false);

  useEffect(() => {
    try {
      axios("http://localhost:3333/games").then((response) =>
        setGames(response.data)
      );
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function handleCreateAd(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const { name, yearsPlaying, discord, hourStart, hourEnd } = data;

    if (
      !(
        name &&
        yearsPlaying &&
        discord &&
        hourStart &&
        hourEnd &&
        selectedWeekDays.length
      )
    ) {
      return alert("Preencha todos os campos!");
    }

    try {
      await axios.post(`http://localhost:3333/games/${data.game}/ads`, {
        name,
        yearsPlaying: Number(yearsPlaying),
        discord,
        weekDays: selectedWeekDays.map(Number),
        hourStart,
        hourEnd,
        useVoiceChannel: useVoiceChannel,
      });

      alert("Anúncio criado com sucesso!");
    } catch (error) {
      console.log(error);
      alert("Erro ao criar anúncio!");
    }
  }

  const WeekDayToggle = ({ day, value, title }: IWeekDayToggleProps) => {
    return useMemo(() => {
      return (
        <ToggleGroup.Item
          title={title}
          value={value}
          className={`w-8 h-8 rounded  ${
            selectedWeekDays.includes(value) ? "bg-violet-500" : "bg-zinc-900"
          }`}
        >
          {day}
        </ToggleGroup.Item>
      );
    }, [selectedWeekDays]);
  };

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/60" />

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-3xl text-white font-black">
          Publique um anúncio
        </Dialog.Title>

        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">
              Qual o game?
            </label>
            <select
              name="game"
              id="game"
              className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500"
              defaultValue=""
            >
              <option disabled value="">
                Selecione o game que deseja jogar
              </option>

              {games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input
              name="name"
              id="name"
              type="text"
              placeholder="Como te chamam dentro do game?"
            />
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga a quantos anos?</label>
              <Input
                name="yearsPlaying"
                id="yearsPlaying"
                type="number"
                placeholder="Tudo bem ser ZERO"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input
                name="discord"
                id="discord"
                type="text"
                placeholder="Usuário#0000"
              />
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="weekDays">Quando costuma jogar?</label>

              <ToggleGroup.Root
                type="multiple"
                className="grid grid-cols-4 gap-2"
                value={selectedWeekDays}
                onValueChange={setSelectedWeekDays}
              >
                <WeekDayToggle title="Domingo" value="0" day="D" />
                <WeekDayToggle title="Segunda-feira" value="1" day="S" />
                <WeekDayToggle title="Terça-feira" value="2" day="T" />
                <WeekDayToggle title="Quarta-feira" value="3" day="Q" />
                <WeekDayToggle title="Quinta-feira" value="4" day="Q" />
                <WeekDayToggle title="Sexta-feira" value="5" day="S" />
                <WeekDayToggle title="Sábado" value="6" day="S" />
              </ToggleGroup.Root>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              <label htmlFor="hourStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input
                  name="hourStart"
                  id="hourStart"
                  type="time"
                  placeholder="De"
                />
                <Input
                  name="hourEnd"
                  id="hourEnd"
                  type="time"
                  placeholder="Até"
                />
              </div>
            </div>
          </div>

          <label className="mt-2 flex gap-2 text-sm items-center">
            <Checkbox.Root
              className="w-6 h-6 p-1 rounded bg-zinc-900"
              checked={useVoiceChannel}
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setUseVoiceChannel(true);
                } else {
                  setUseVoiceChannel(false);
                }
              }}
            >
              <Checkbox.Indicator>
                <Check size={16} className="text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
            Costumo me conectar ao chat de voz
          </label>

          <footer className="mt-4 flex justify-end gap-4">
            <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
              Cancelar
            </Dialog.Close>
            <button
              type="submit"
              className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600"
            >
              <GameController size={24} /> Encontrar duo
            </button>
          </footer>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
};
