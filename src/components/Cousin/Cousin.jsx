import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";

const Cousin = ({ name }) => {
  const gift = useContext(AssetContext);
  return (
    <div>
      <h1>Cousin</h1>
      <p>{name}</p>
      <p>has: {gift}</p>
    </div>
  );
};

export default Cousin;
