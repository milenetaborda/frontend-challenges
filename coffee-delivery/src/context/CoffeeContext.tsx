import { createContext, useState } from "react";
import { dataCoffes, ICoffe } from "../constants/dataCoffes.mock";

export interface ICoffeeWithAmount extends ICoffe {
  amount?: number;
}

interface ICoffeeContext {
  coffees: typeof dataCoffes;
  incrementCoffee: (id: number) => void;
  decrementCoffee: (id: number) => void;
  addToCart: (coffee: ICoffeeWithAmount) => void;
  cart: ICoffeeWithAmount[];
}

interface ICoffeeProviderData {
  children: React.ReactNode;
}

export const CoffeeContext = createContext({} as ICoffeeContext);

export const CoffeeProvider = ({ children }: ICoffeeProviderData) => {
  const [coffees, setCoffees] = useState(dataCoffes);
  const [cart, setCart] = useState<ICoffeeWithAmount[]>([]);

  const incrementCoffee = (id: number) => {
    const newCoffees = coffees.map((coffee: ICoffeeWithAmount) => {
      if (coffee.id === id) {
        const currentCoffeeAmount = coffee.amount ? coffee.amount + 1 : 1;
        return { ...coffee, amount: currentCoffeeAmount };
      }

      return coffee;
    });

    setCoffees(newCoffees);
  };

  const decrementCoffee = (id: number) => {
    const newCoffees = coffees.map((coffee: ICoffeeWithAmount) => {
      if (coffee.id === id) {
        const currentCoffeeAmount = coffee.amount ? coffee.amount - 1 : 0;
        return { ...coffee, amount: currentCoffeeAmount };
      }

      return coffee;
    });

    setCoffees(newCoffees);
  };

  const addToCart = (coffee: ICoffeeWithAmount) => {
    setCart((cartData) => [...cartData, coffee]);
  };

  return (
    <CoffeeContext.Provider
      value={{ coffees, incrementCoffee, decrementCoffee, addToCart, cart }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};
