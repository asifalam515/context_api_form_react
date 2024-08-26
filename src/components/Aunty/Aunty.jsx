import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Aunty = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h5>Aunty: {money} </h5>
      <button
        onClick={() => {
          setMoney(money + 1);
        }}
      >
        Increase
      </button>
      <section className="flex">
        <Cousin name={"Mamshad"}></Cousin>
        <Cousin name={"Rubaiya"}></Cousin>
      </section>
    </div>
  );
};

export default Aunty;
