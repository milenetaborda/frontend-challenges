import { GroupSelectLocation } from "@/components/GroupSelectLocation";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <img src="/logo2.svg" alt="Logo" />

      <article>
        <h1>
          Leve <br /> a felicidade para o seu lar
        </h1>
        <img src="/pets.svg" alt="Pets" />
      </article>

      <article>
        <h2>Encontre o animal de estimação ideal para seu estilo de vida!</h2>

        <div>
          <p>Busque um amigo:</p>
          <GroupSelectLocation />
        </div>
      </article>
    </Container>
  );
}
