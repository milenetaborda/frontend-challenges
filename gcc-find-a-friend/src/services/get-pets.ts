import { api } from "./api";

type AgeTypes = "cub" | "adolescent" | "elderly";
type IndependenceTypes = "low" | "medium" | "high";
type SizeTypes = "small" | "medium" | "large";

export interface PetGallery {
  id: string;
  image: string;
  petId: string;
  photo_url: string;
}

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
  gallery_images?: PetGallery[];
  org?: {
    address: string;
    cep: string;
    id: string;
    nome: string;
    whatsappNumber: string;
  };
}

export const getPets = async (params: PetsParams): Promise<Pet[]> => {
  const { city, ...restParams } = params;
  delete restParams.uf;

  try {
    const { data } = await api.get(`/pets/${city}`, { params: restParams });
    return data.pets;
  } catch (error) {
    throw error;
  }
};

export const getPetDetails = async (petId: string): Promise<Pet> => {
  try {
    const { data } = await api.get(`/pets/show/${petId}`);
    return data.pet;
  } catch (error) {
    throw error;
  }
};

export const getPetGalleryImages = async (
  petId: string
): Promise<PetGallery[]> => {
  try {
    const { data } = await api.get(`/pets/gallery/${petId}`);
    return data.pet_gallery;
  } catch (error) {
    throw error;
  }
};
