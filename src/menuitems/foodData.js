import BerryTart from "../assets/berrytart.jpg";
import CCarCupcake from "../assets/chocolatecaramelcupcake.jpg";
import RocherCupcake from "../assets/rochercupcake.jpg";
import uuid4 from "uuid4";

const food = [
  {
    type: "Berry Tart",
    picture: BerryTart,
    description:
      "A lovely seasonal berry tart with locally sourced berries. Best with a warm drink!",
    price: 350,
    id: uuid4(),
  },
  {
    type: "Chocolate Cupcake",
    picture: CCarCupcake,
    description:
      "Decadence and delicousness! Give in to the allure of a warm chocolate embrace and a luscious caramel kiss.",
    price: 250,
    id: uuid4(),
  },
  {
    type: "Rocher Cupcake",
    picture: RocherCupcake,
    description:
      "Candy heaven meets bakery paradise -- get lost in the hazelnut allure of this lovely dessert.",
    price: 300,
    id: uuid4(),
  },
];

export default food;
