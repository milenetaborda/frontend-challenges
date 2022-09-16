import coffeImage from "../assets/coffee.png";

export interface ICoffe {
  id: number;
  imageUrl: string;
  tags: string[];
  name: string;
  desc: string;
  value: number;
}

export const dataCoffes: ICoffe[] = [
  {
    id: 1,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Expresso Tradicional",
    desc: "O tradicional café feito com água quente e grãos moídos",
    value: 9.9,
  },
  {
    id: 2,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Expresso Americano",
    desc: "Expresso diluído, menos intenso que o tradicional",
    value: 9.9,
  },
  {
    id: 3,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Expresso Cremoso",
    desc: "Café expresso tradicional com espuma cremosa",
    value: 9.9,
  },
  {
    id: 4,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Expresso Gelado",
    desc: "Bebida preparada com café expresso e cubos de gelo",
    value: 9.9,
  },
  {
    id: 5,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Café com Leite",
    desc: "Meio a meio de expresso tradicional com leite vaporizado",
    value: 9.9,
  },
  {
    id: 6,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Latte",
    desc: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    value: 9.9,
  },
  {
    id: 7,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Capuccino",
    desc: "Bebida com canela feita de doses iguais de café, leite e espuma",
    value: 9.9,
  },
  {
    id: 8,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Macchiato",
    desc: "Café expresso misturado com um pouco de leite quente e espuma",
    value: 9.9,
  },
  {
    id: 9,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Mocaccino",
    desc: "Café expresso com calda de chocolate, pouco leite e espuma",
    value: 9.9,
  },
  {
    id: 10,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Chocolate Quente",
    desc: "Bebida feita com chocolate dissolvido no leite quente e café",
    value: 9.9,
  },
  {
    id: 11,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Cubano",
    desc: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    value: 9.9,
  },
  {
    id: 12,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Havaiano",
    desc: "Bebida adocicada preparada com café e leite de coco",
    value: 9.9,
  },
  {
    id: 13,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Árabe",
    desc: "Bebida preparada com grãos de café árabe e especiarias",
    value: 9.9,
  },
  {
    id: 14,
    imageUrl: coffeImage,
    tags: ["Tradicional"],
    name: "Irlandês",
    desc: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    value: 9.9,
  },
];
