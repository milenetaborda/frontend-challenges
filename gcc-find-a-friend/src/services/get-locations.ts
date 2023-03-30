import { api } from "./api";

export interface StateData {
  id: number;
  nome: string;
  sigla: string;
}

export interface CityData {
  name: string;
  code: string;
}

export const getStates = async (): Promise<StateData[]> => {
  try {
    const { data } = await api.get("/location/states");
    return data.states;
  } catch (error) {
    throw error;
  }
};

export const getCities = async (uf: string): Promise<CityData[]> => {
  try {
    const response = await api.get(`/location/citys/${uf}`);
    return response.data.citys;
  } catch (error) {
    throw error;
  }
};
