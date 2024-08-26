import Brother from "../Brother/Brother";
import MySelf from "../Myself/MySelf";
import Sister from "../Sister/Sister";

const Dad = ({ asset }) => {
  return (
    <div>
      <h1>Dad</h1>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dad;
