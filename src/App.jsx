import { Simulate } from "react-dom/test-utils";
import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import StatefulForm from "./components/StatefulForm/StatefulForm";
import RefFrom from "./components/Reffrom/RefFrom";
import HookForm from "./components/HooksForm/HookForm";
import ReuseableFrom from "./components/ReuseableForm/ReuseableFrom";
import Grandpa from "./components/Grandpa/Grandpa";

function App() {
  const handleSignUpSubmit = (data) => {
    console.log("Sign up", data);
  };
  const handleUpdateProfile = (data) => {
    console.log("update data", data);
  };
  return (
    <>
      <Grandpa></Grandpa>
      {/* <h1 className="text-2xl">Form In React</h1>
      <ReuseableFrom formTitle={"Sing Up"} handleSubmit={handleSignUpSubmit}>
        <div>
          <h1>Sign Up</h1>
          <p>Please Sing up right Now</p>
        </div>
      </ReuseableFrom>
      <ReuseableFrom
        formTitle={"Profile UpdaTE"}
        submitBtnText={"Update"}
        handleSubmit={handleUpdateProfile}
      >
        <div>
          <h1>Update Profile</h1>
          <p>Always keep your profile updated</p>
        </div>
      </ReuseableFrom> */}
    </>
  );
}

export default App;
