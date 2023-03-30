import { api } from "./api";

type AgeTypes = "cub" | "adolescent" | "elderly";
type IndependenceTypes = "low" | "medium" | "high";
type SizeTypes = "small" | "medium" | "large";

export interface PetsParams {
  uf?: string;
  city: string;
  type?: string;
  age?: AgeTypes;
  energy?: number;
  size?: SizeTypes;
  independence?: IndependenceTypes;
}

export interface Pet {
  id: string;
  name: string;
  description: string;
  city: string;
  age: string;
  energy: number;
  size: string;
  independence: string;
  type: "dog" | "cat";
  photo: string;
  orgId: string;
  photo_url: string;
}

export const getPets = async (
  params: PetsParams
): Promise<Pet[] | undefined> => {
  const { city, ...restParams } = params;
  delete restParams.uf;

  try {
    const { data } = await api.get(`/pets/${city}`, { params: restParams });
    return data.pets;
  } catch (error) {
    console.log(error);
  }
};
