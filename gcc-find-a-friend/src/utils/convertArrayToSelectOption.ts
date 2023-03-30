import { CityData, StateData } from "@/services/get-locations";

export const convertStatesToSelectOption = (obj: StateData[]) => {
  const options = obj?.map((state) => {
    return {
      value: state.sigla,
      label: state.sigla,
    };
  });

  return options;
};

export const convertCitiesToSelectOption = (obj: CityData[]) => {
  const options = obj?.map((city) => {
    return {
      value: city.name,
      label: city.name,
    };
  });

  return options;
};
