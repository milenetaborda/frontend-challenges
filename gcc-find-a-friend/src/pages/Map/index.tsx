import { useContext } from "react";

import { Aside } from "~/Aside";
import { Card } from "~/Card";

import chevron from "@/assets/icons/chevron-bottom-blue.svg";
import { PetsContext, PetType } from "@/context/PetsContext";

import * as S from "./styles";

export function Map() {
  const { handleFilterByPetType, pets } = useContext(PetsContext);

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
              onChange={(e) => handleFilterByPetType(e.target.value as PetType)}
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

        {pets?.length === 0 && (
          <S.NoPets>
            <p>Poxa, não encontramos nenhum amigo, tente alterar os filtros.</p>
          </S.NoPets>
        )}
      </S.Content>
    </S.Container>
  );
}
