import AppleTea from "../assets/appletea.jpg";
import MintTea from "../assets/minttea.jpg";
import uuid4 from "uuid4";
const teas = [
  {
    type: "Apple tea",
    picture: AppleTea,
    description: "A lovely herbal tea made from apple and cinnamon.",
    price: "1.50",
    id: uuid4(),
  },
  {
    type: "Mint tea",
    picture: MintTea,
    description:
      "A rustic soothing tea; good for a sore throat or a cold winter's day.",
    price: "1.25",
    id: uuid4(),
  },
];

export default teas;
