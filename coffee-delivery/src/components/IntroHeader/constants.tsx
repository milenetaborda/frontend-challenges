import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { InfoItemProps } from "./styles";

interface IntroItem extends InfoItemProps {
  icon: JSX.Element;
  text: string;
}

export const introItemsDescriptions: IntroItem[] = [
  {
    text: "Compra simples e segura",
    icon: <ShoppingCart size={16} />,
    backgroundColor: "yellowDark",
  },
  {
    text: "Embalagem mantém o café intacto",
    icon: <Package size={16} />,
    backgroundColor: "gray",
  },
  {
    text: "Entrega rápida e rastreada",
    icon: <Timer size={16} />,
    backgroundColor: "yellow",
  },
  {
    text: "O café chega fresquinho até você",
    icon: <Coffee size={16} />,
    backgroundColor: "purple",
  },
];
