import {
  CityData,
  StateData,
  getCities,
  getStates,
} from "@/services/get-locations";
import { Pet, PetsParams, getPets } from "@/services/get-pets";
import { ReactNode, createContext, useEffect, useState } from "react";

export type PetType = "all" | "dog" | "cat";

interface PetsContextType {
  pets: Pet[];
  searchFilters: PetsParams;
  petType: PetType;
  statesData: StateData[] | null;
  citiesData: CityData[] | null;
  handleChangeSearchFilters: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleSearchPets: () => void;
  handleFilterByPetType: (type: PetType) => void;
}

interface PetsProviderProps {
  children: ReactNode;
}

export const PetsContext = createContext<PetsContextType>(
  {} as PetsContextType
);

export const PetsProvider = ({ children }: PetsProviderProps) => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petType, setPetType] = useState<PetType>("all");
  const [hasSearchFilters, setHasSearchFilters] = useState(false);
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

  useEffect(() => {
    const params = {
      ...searchFilters,
      type: petType,
    };

    getPets(params).then((pets) => setPets(pets));
    setHasSearchFilters(false);
  }, [hasSearchFilters, petType]);

  function handleChangeSearchFilters(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;

    if (searchFilters?.uf === value) return;

    setSearchFilters((prevState) => ({
      ...prevState,
      ...(name === "uf" && { city: "" }),
      [name]: value,
    }));
  }

  function handleSearchPets() {
    if (window.location.pathname === "/") {
      window.location.href = "/map";
    }

    setHasSearchFilters(true);
  }

  function handleFilterByPetType(type: PetType) {
    setPetType(type);
    setHasSearchFilters(true);
  }

  return (
    <PetsContext.Provider
      value={{
        pets,
        searchFilters,
        petType,
        citiesData,
        statesData,
        handleChangeSearchFilters,
        handleFilterByPetType,
        handleSearchPets,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
