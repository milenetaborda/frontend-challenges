import { useEffect, useState } from "react";
import {
  CityData,
  getCities,
  getStates,
  StateData,
} from "@/services/get-locations";
import { Select } from "@/components/Select";

import logo from "@/assets/icons/logo.svg";
import search from "@/assets/icons/search.svg";

import {
  ageOptions,
  energyOptions,
  independencyOptions,
  sizeOptions,
} from "./mocks";

import {
  convertCitiesToSelectOption,
  convertStatesToSelectOption,
} from "@/utils/convertArrayToSelectOption";
import { PetsParams } from "@/services/get-pets";
import * as S from "./styles";

export function Aside() {
  const [statesData, setStatesData] = useState<StateData[] | null>(null);
  const [citiesData, setCitiesData] = useState<CityData[] | null>(null);
  const [searchFilters, setSearchFilters] = useState<PetsParams>({
    uf: "SP",
    city: "Sao Paulo",
  });

  useEffect(() => {
    Promise.all([getStates(), getCities(searchFilters?.uf!)]).then(
      (response) => {
        const [states, cities] = response;

        setStatesData(states);
        setCitiesData(cities);
      }
    );
  }, [searchFilters?.uf]);

  function handleChangeSearchFilters(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    if (searchFilters?.uf === value) return;

    setSearchFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const statesOptions = convertStatesToSelectOption(statesData || []);
  const citiesOptions = convertCitiesToSelectOption(citiesData || []);

  return (
    <S.Container>
      <S.AsideHeader>
        <div>
          <img src={logo} alt="" />
          <S.HeaderInput>
            <S.SelectWrapper>
              <select name="uf" id="uf" onChange={handleChangeSearchFilters}>
                <option value="" disabled selected>
                  {searchFilters?.uf || "UF"}
                </option>
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

            <button>
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
            name="independency"
            label="Nível de independência"
            options={independencyOptions}
            onChange={handleChangeSearchFilters}
          />
        </S.ContentFilters>
      </S.AsideContent>
    </S.Container>
  );
}
