import BerryTart from "../assets/berrytart.jpg";
import CCarCupcake from "../assets/chocolatecaramelcupcake.jpg";
import RocherCupcake from "../assets/rochercupcake.jpg";
import AppleTea from "../assets/appletea.jpg";
import MintTea from "../assets/minttea.jpg";
import Americano from "../assets/americano.jpg";
import Latte from "../assets/latte.jpg";
import CMacc from "../assets/caramelmacchiato.jpg";

export const food = [
  {
    itemName: "Berry Tart",
    itemPic: BerryTart,
    itemDescription:
      "A lovely seasonal berry tart with locally sourced berries. Best with a warm drink!",
    itemPrice: 350,
    itemTotal: 0,
    itemType: "food",
  },
  {
    itemName: "Chocolate Cupcake",
    itemPic: CCarCupcake,
    itemDescription:
      "Decadence and delicousness! Give in to the allure of a warm chocolate embrace and a luscious caramel kiss.",
    itemPrice: 250,
    itemTotal: 0,
    itemType: "food",
  },
  {
    itemName: "Rocher Cupcake",
    itemPic: RocherCupcake,
    itemDescription:
      "Candy heaven meets bakery paradise -- get lost in the hazelnut allure of this lovely dessert.",
    itemPrice: 300,
    itemTotal: 0,
    itemType: "food",
  },
];

export const teas = [
  {
    itemName: "Apple tea",
    itemPic: AppleTea,
    itemDescription: "A lovely herbal tea made from apple and cinnamon.",
    itemPrice: 150,
    itemTotal: 0,
    itemType: "tea",
  },
  {
    itemName: "Mint Tea",
    itemPic: MintTea,
    itemDescription:
      "A rustic soothing tea; good for a sore throat or a cold winter's day.",
    itemPrice: 125,
    itemTotal: 0,
    itemType: "tea",
  },
];

export const coffees = [
  {
    itemName: "Americano",
    itemPic: Americano,
    itemDescription:
      "An espresso solo or dopplo with water. Served hot or over ice.",
    itemPrice: 250,
    itemTotal: 0,
    itemType: "coffee",
  },
  {
    itemName: "Latte",
    itemPic: Latte,
    itemDescription:
      "Lovingly pulled espresso mixed with fresh milk brings out a slight natural vanilla note.",
    itemPrice: 300,
    itemTotal: 0,
    itemType: "coffee",
  },

  {
    itemName: "Caramel Macchiato",
    itemPic: CMacc,
    itemDescription:
      "Gently steamed milk and a caramel drizzle pull this lovely invigorating drink together.",
    itemPrice: 325,
    itemTotal: 0,
    itemType: "coffee",
  },
];

const menu = [...food, ...coffees, ...teas];

export default menu;
