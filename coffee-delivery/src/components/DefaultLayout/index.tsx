import { Outlet } from "react-router-dom";
import { Header } from "../Header";

import * as S from "./styles";

export const DefaultLayout = () => {
  return (
    <S.DefaultLayoutContainer>
      <Header />
      <Outlet />
    </S.DefaultLayoutContainer>
  );
};
