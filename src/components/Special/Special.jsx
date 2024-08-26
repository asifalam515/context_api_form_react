import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Special = ({ asset }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h2>Special </h2>
      <p>Got:{asset}</p>
      <h5>Also has: {gift}</h5>
    </div>
  );
};

export default Special;
