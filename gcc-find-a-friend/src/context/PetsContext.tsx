import { Pet, PetsParams, getPets } from "@/services/get-pets";
import { ReactNode, createContext, useEffect, useState } from "react";

export type PetType = "all" | "dog" | "cat";

interface PetsContextType {
  pets: Pet[];
  searchFilters: PetsParams;
  petType: PetType;
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
  const [searchFilters, setSearchFilters] = useState<PetsParams>({
    uf: "SP",
    city: "Sao Paulo",
  });

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
        handleChangeSearchFilters,
        handleFilterByPetType,
        handleSearchPets,
      }}
    >
      {children}
    </PetsContext.Provider>
  );
};
