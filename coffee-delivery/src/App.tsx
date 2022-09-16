import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./constants/router";
import { CoffeeProvider } from "./context/CoffeeContext";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <BrowserRouter>
        <CoffeeProvider>
          <Router />
        </CoffeeProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
