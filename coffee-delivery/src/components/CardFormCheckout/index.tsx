import * as S from "./styles";

interface ICardFormCheckoutProps {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export const CardFormCheckout = ({
  title,
  subtitle,
  icon,
  children,
}: ICardFormCheckoutProps) => {
  return (
    <S.CardFormCheckoutContainer>
      <S.CardFormHeader>
        {icon}

        <div>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </div>
      </S.CardFormHeader>

      {children}
    </S.CardFormCheckoutContainer>
  );
};
