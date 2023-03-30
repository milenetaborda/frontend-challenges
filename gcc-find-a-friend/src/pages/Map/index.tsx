import { useEffect, useState } from "react";

import { Aside } from "~/Aside";
import { Card } from "~/Card";

import chevron from "@/assets/icons/chevron-bottom-blue.svg";
import { getPets, Pet } from "@/services/get-pets";

import * as S from "./styles";

export function Map() {
  const [pets, setPets] = useState<Pet[] | undefined>();
  const [petType, setPetType] = useState("all");

  useEffect(() => {
    const params = {
      city: "Sao Paulo",
      type: petType,
    };

    getPets(params).then((pets) => setPets(pets));
  }, [petType]);

  function handleFilterByPetType(type: string) {
    setPetType(type);
  }

  return (
    <S.Container>
      <Aside />

      <S.Content>
        <S.Header>
          <p>
            Encontre <span>324 amigos</span> na sua cidade
          </p>

          <S.SelectWrapper>
            <S.HeaderSelect
              name="size"
              id="size"
              onChange={(e) => handleFilterByPetType(e.target.value)}
            >
              <option value="all">Gatos e Cachorros</option>
              <option value="cat">Gatos</option>
              <option value="dog">Cachorros</option>
            </S.HeaderSelect>
            <img src={chevron} alt="" />
          </S.SelectWrapper>
        </S.Header>

        <S.Display>
          {pets?.map((pet) => (
            <Card key={pet.id} path={pet.photo_url} {...pet} />
          ))}
        </S.Display>
      </S.Content>
    </S.Container>
  );
}
