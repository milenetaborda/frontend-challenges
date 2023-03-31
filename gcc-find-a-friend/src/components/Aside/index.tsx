import { Select } from "@/components/Select";
import {
  CityData,
  StateData,
  getCities,
  getStates,
} from "@/services/get-locations";
import { useContext, useEffect, useState } from "react";

import logo from "@/assets/icons/logo.svg";
import search from "@/assets/icons/search.svg";
import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from "./mocks";

import { PetsContext } from "@/context/PetsContext";
import {
  convertCitiesToSelectOption,
  convertStatesToSelectOption,
} from "@/utils/convertArrayToSelectOption";
import * as S from "./styles";

export function Aside() {
  const [statesData, setStatesData] = useState<StateData[] | null>(null);
  const [citiesData, setCitiesData] = useState<CityData[] | null>(null);
  const { searchFilters, handleChangeSearchFilters, handleSearchPets } =
    useContext(PetsContext);

  useEffect(() => {
    Promise.all([getStates(), getCities(searchFilters?.uf!)]).then(
      (response) => {
        const [states, cities] = response;

        setStatesData(states);
        setCitiesData(cities);
      }
    );
  }, [searchFilters?.uf]);

  const statesOptions = convertStatesToSelectOption(statesData || []);
  const citiesOptions = convertCitiesToSelectOption(citiesData || []);

  return (
    <S.Container>
      <S.AsideHeader>
        <div>
          <img src={logo} alt="" />
          <S.HeaderInput>
            <S.SelectWrapper>
              <select
                name="uf"
                id="uf"
                onChange={handleChangeSearchFilters}
                value={searchFilters?.uf}
              >
                {statesOptions.map((state) => (
                  <option key={state.value} value={state.value}>
                    {state.label}
                  </option>
                ))}
              </select>

              <select
                name="city"
                id="city"
                onChange={handleChangeSearchFilters}
                value={searchFilters?.city}
              >
                <option value="" disabled selected>
                  {!!searchFilters?.city ? searchFilters?.city : "Cidade"}
                </option>

                {citiesOptions.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>
            </S.SelectWrapper>

            <button onClick={handleSearchPets}>
              <img src={search} alt="ícone de lupa" />
            </button>
          </S.HeaderInput>
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
