import { useEffect, useMemo, useState } from "react";
import L, { LatLngExpression } from "leaflet";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

import img from "../../assets/images/dog.png";
import imgMarker from "/marker-icon.svg";

import { Pet, getPetDetails, getPetGalleryImages } from "@/services/get-pets";
import { mappingEnergy, mappingSizes } from "./helper";
import * as S from "./styles";
import { GeolocationData, getOngGeolocation } from "@/services/get-locations";

const svgIcon = L.divIcon({
  html: `<img src=${imgMarker} />`,
  className: "svg-icon",
  iconSize: [24, 40],
  iconAnchor: [12, 40],
});

interface ImageSelectedProps {
  id: string | null;
  photo_url: string | null;
}

export function PetDetails() {
  const [petDetails, setPetDetails] = useState<Pet>({} as Pet);
  const [ongDetails, setOngDetails] = useState<GeolocationData>();
  const [position, setPosition] = useState<LatLngExpression>([0, 0]);
  const [imageSelected, setImageSelected] = useState<ImageSelectedProps>({
    id: null,
    photo_url: null,
  });

  useEffect(() => {
    const fetchPetData = async () => {
      const [petDetails, petGalleryImages] = await Promise.all([
        getPetDetails("137d9eb5-aae2-4aa2-958a-525ec830dde9"),
        getPetGalleryImages("137d9eb5-aae2-4aa2-958a-525ec830dde9"),
      ]);

      if (petDetails.org) {
        const response = await getOngGeolocation(petDetails.org.cep);
        const { latitude, longitude } = response?.coordinates ?? {};
        setPosition([Number(latitude), Number(longitude)]);
        setOngDetails(response);
      }

      setPetDetails(() => ({
        ...petDetails,
        gallery_images: petGalleryImages,
      }));

      setImageSelected({
        id: petGalleryImages[0].id,
        photo_url: petGalleryImages[0].photo_url,
      });
    };

    fetchPetData();
  }, []);

  const Map = () =>
    useMemo(() => {
      return (
        <S.MapWrapper>
          <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={svgIcon} />
          </MapContainer>

          <strong>Ver rotas no Google Maps</strong>
        </S.MapWrapper>
      );
    }, [position]);

  return (
    <S.PetDetailsContainer>
      <S.Content>
        {imageSelected?.photo_url && (
          <S.ImageSelected src={imageSelected?.photo_url} />
        )}

        <section>
          <S.Gallery>
            {petDetails.gallery_images?.map(({ id, photo_url }) => (
              <S.PetImage
                key={id}
                src={photo_url}
                selected={imageSelected.id === id}
                onClick={() => setImageSelected({ id, photo_url })}
              />
            ))}
          </S.Gallery>

          <S.PetName>{petDetails.name}</S.PetName>
          <S.PetDescription>{petDetails.description}</S.PetDescription>

          <S.PetInfo>
            <li>{mappingEnergy[petDetails.energy]}</li>
            <li>Ambiente amplo</li>
            <li>{mappingSizes[petDetails.size]}</li>
          </S.PetInfo>
        </section>

        <Map />

        <hr />

        <S.OngDetails>
          <img src={img} />

          <S.OngContact>
            <h2>{petDetails.org?.nome}</h2>
            <p>{petDetails.org?.address}</p>

            <S.OngWhatsapp>
              <img src="/whatsapp-icon.svg" />
              {petDetails.org?.whatsappNumber}
            </S.OngWhatsapp>
          </S.OngContact>
        </S.OngDetails>

        <hr />
      </S.Content>
    </S.PetDetailsContainer>
  );
}
