import { AddressForm } from "../../components/Form/AddressForm";
import { PaymentForm } from "../../components/Form/PaymentForm";
import * as S from "./styles";

export const Checkout = () => {
  return (
    <S.CheckoutContainer>
      <S.FormAddressContainer>
        <h1>Complete seu pedido</h1>

        <AddressForm />

        <PaymentForm />
      </S.FormAddressContainer>

      {/* <S.CartContainer>
        <h1>Cafés selecionados</h1>

        <S.CartList>
          <S.CartItem>oioi</S.CartItem>
          <S.CartItem>oioi</S.CartItem>
        </S.CartList>

        <S.CartTotal>
          <span>Total</span>
          <span>R$ 0,00</span>
        </S.CartTotal>

        <S.CartButton>Confirmar pedido</S.CartButton>
      </S.CartContainer> */}
    </S.CheckoutContainer>
  );
};
