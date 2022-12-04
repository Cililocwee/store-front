import Americano from "../assets/americano.jpg";
import Latte from "../assets/latte.jpg";
import CMacc from "../assets/caramelmacchiato.jpg";

const coffees = [
  {
    type: "Americano",
    picture: Americano,
    description:
      "An espresso solo or dopplo with water. Served hot or over ice.",
    price: "2.50",
  },
  {
    type: "Latte",
    picture: Latte,
    description:
      "Lovingly pulled espresso mixed with fresh milk brings out a slight natural vanilla note.",
    price: "3.00",
  },

  {
    type: "Caramel Macchiato",
    picture: CMacc,
    description:
      "Gently steamed milk and a caramel drizzle pull this lovely invigorating drink together.",
    price: "3.25",
  },
];

export default coffees;
