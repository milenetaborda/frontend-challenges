import { useContext } from "react";
import search from "@/assets/icons/search.svg";
import { PetsContext } from "@/context/PetsContext";
import {
  convertCitiesToSelectOption,
  convertStatesToSelectOption,
} from "@/utils/convertArrayToSelectOption";
import * as S from "./styles";

export const GroupSelectLocation = () => {
  const {
    searchFilters,
    citiesData,
    statesData,
    handleChangeSearchFilters,
    handleSearchPets,
  } = useContext(PetsContext);

  const statesOptions = convertStatesToSelectOption(statesData || []);
  const citiesOptions = convertCitiesToSelectOption(citiesData || []);

  return (
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
  );
};
