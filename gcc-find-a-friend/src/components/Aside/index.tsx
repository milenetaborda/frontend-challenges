import { Select } from "@/components/Select";

import logo from "@/assets/icons/logo.svg";
import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from "./mocks";

import * as S from "./styles";
import { useContext } from "react";
import { PetsContext } from "@/context/PetsContext";
import { GroupSelectLocation } from "../GroupSelectLocation";

export function Aside() {
  const { handleChangeSearchFilters } = useContext(PetsContext);

  return (
    <S.Container>
      <S.AsideHeader>
        <div>
          <img src={logo} alt="" />

          <GroupSelectLocation />
        </div>
      </S.AsideHeader>
      <S.AsideContent>
        <S.ContentHeader>Filtros</S.ContentHeader>
        <S.ContentFilters>
          <Select
            name="age"
            label="Idade"
            options={ageOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="energy"
            label="Nível de energia"
            options={energyOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="size"
            label="Porte do animal"
            options={sizeOptions}
            onChange={handleChangeSearchFilters}
          />

          <Select
            name="independence"
            label="Nível de independência"
            options={independencyOptions}
            onChange={handleChangeSearchFilters}
          />
        </S.ContentFilters>
      </S.AsideContent>
    </S.Container>
  );
}
