import logo from "@/assets/icons/logo.svg";

import { Container, Name, PetImage, TypeIcon } from "./styles";

type CardProps = {
  id: string;
  path: string;
  name: string;
  type: "dog" | "cat";
};

export function Card({ path, name, type, id }: CardProps) {
  function handleRedirectToPetDetails() {
    window.location.href = `/details/${id}`;
  }

  return (
    <Container onClick={handleRedirectToPetDetails}>
      <PetImage>
        <img src={path} alt={`Foto de ${name}`} />
      </PetImage>
      <div>
        <TypeIcon>
          <div
            style={{ backgroundColor: type === "cat" ? "#F4D35E" : "#F15156" }}
          >
            <img src={logo} alt="" />
          </div>
        </TypeIcon>
        <Name>{name}</Name>
      </div>
    </Container>
  );
}
