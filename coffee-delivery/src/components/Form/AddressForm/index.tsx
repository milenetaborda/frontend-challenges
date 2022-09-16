import { MapPinLine } from "phosphor-react";
import { CardFormCheckout } from "../../CardFormCheckout";
import * as S from "./styles";

export const AddressForm = () => {
  return (
    <CardFormCheckout
      title="Endereço de Entrega"
      subtitle="Informe o endereço onde deseja receber seu pedido"
      icon={<MapPinLine size={22} color="#C47F17" />}
    >
      <S.Form action="">
        <S.Input type="text" name="cep" placeholder="CEP" width="200px" />
        <S.Input type="text" name="address" placeholder="Rua" />

        <S.FormContent>
          <S.Input
            type="text"
            name="addressNumber"
            placeholder="Número"
            width="200px"
          />
          <S.Input type="text" name="complement" placeholder="CEP" />
        </S.FormContent>

        <S.FormContent>
          <S.Input
            type="text"
            name="neighborhood"
            placeholder="Bairro"
            width="200px"
          />
          <S.Input type="text" name="city" placeholder="Cidade" width="276px" />
          <S.Input type="text" name="uf" placeholder="UF" />
        </S.FormContent>
      </S.Form>
    </CardFormCheckout>
  );
};
