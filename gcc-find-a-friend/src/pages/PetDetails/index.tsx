import * as S from "./styles";
import img from "../../assets/images/dog.png";
import { useEffect } from "react";
import { getPetDetails } from "@/services/get-pets";

export function PetDetails() {
  useEffect(() => {
    getPetDetails("137d9eb5-aae2-4aa2-958a-525ec830dde9").then((response) =>
      console.log(response)
    );
  }, []);

  return (
    <S.PetDetailsContainer>
      <S.Content>
        <S.ImageSelected src={img} />

        <section>
          <S.Gallery>
            {Array.from({ length: 5 }).map((_, index) => (
              <S.PetImage key={index} src={img} selected={index === 0} />
            ))}
          </S.Gallery>

          <S.PetName>Nome do Pet</S.PetName>
          <S.PetDescription>
            Eu sou um lindo doguinho de 3 anos, um jovem bricalhão que adora
            fazer companhia, uma bagunça mas também ama uma soneca.
          </S.PetDescription>

          <S.PetInfo>
            <li>
              <p>oi</p>
            </li>
          </S.PetInfo>
        </section>
      </S.Content>
    </S.PetDetailsContainer>
  );
}
