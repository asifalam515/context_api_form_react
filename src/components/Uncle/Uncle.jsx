import React, { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";

const Uncle = () => {
  return (
    <div>
      <h3>Uncle </h3>
      <section className="flex">
        <Cousin name={"Rafsan"}></Cousin>
        <Cousin name={"Nirzhar"}></Cousin>
      </section>
    </div>
  );
};

export default Uncle;
