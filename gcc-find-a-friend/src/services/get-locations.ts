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

interface GeolocationData {
  address: string;
  coordinates: {
    latitude: string;
    longitude: string;
  };
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

export const getOngGeolocation = async (
  cep: string
): Promise<GeolocationData> => {
  try {
    const response = await api.get(`/location/geolocation/${cep}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
