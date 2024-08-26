import React, { createContext, useState } from "react";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";
export const AssetContext = createContext("gold");
export const MoneyContext = createContext(1);
const Grandpa = () => {
  const asset = "diamond ring";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa ">
      <h2>Grandpa</h2>
      <MoneyContext.Provider value={[money, setMoney]}>
        <AssetContext.Provider value="gold">
          <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle></Uncle>
            <Aunty></Aunty>
          </section>
        </AssetContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

// step1 =>create a context and export it
// step 2=>add provide for the context with a value.value could be anything
// step 3=>useContext to access value in the context api
