import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { CardFormCheckout } from "../../CardFormCheckout";

import * as S from "./styles";

export const PaymentForm = () => {
  return (
    <CardFormCheckout
      title="Pagamento"
      subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
      icon={<CurrencyDollar size={22} color="#8047F8" />}
    >
      <S.PaymentMethodWrapper>
        <S.PaymentMethodButton isSelected>
          <CreditCard size={16} color="#8047F8" /> Cartão de crédito
        </S.PaymentMethodButton>
        <S.PaymentMethodButton>
          <Bank size={16} color="#8047F8" />
          Cartão de débito
        </S.PaymentMethodButton>
        <S.PaymentMethodButton>
          <Money size={16} color="#8047F8" /> Dinheiro
        </S.PaymentMethodButton>
      </S.PaymentMethodWrapper>
    </CardFormCheckout>
  );
};
