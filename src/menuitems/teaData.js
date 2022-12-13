import AppleTea from "../assets/appletea.jpg";
import MintTea from "../assets/minttea.jpg";
import uuid4 from "uuid4";
const teas = [
  {
    type: "Apple tea",
    picture: AppleTea,
    description: "A lovely herbal tea made from apple and cinnamon.",
    price: 150,
    id: uuid4(),
  },
  {
    type: "Mint Tea",
    picture: MintTea,
    description:
      "A rustic soothing tea; good for a sore throat or a cold winter's day.",
    price: 125,
    id: uuid4(),
  },
];

export default teas;
