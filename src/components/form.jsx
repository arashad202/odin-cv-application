import GeneralInfo from "./generalInfo";
import Education from "./education";

function Form() {
  return (
    <form className="w-[50%] my-5 mx-auto p-5 border border-black rounded-2xl grid grid-cols-1">
      <GeneralInfo/>
      <Education/>
    </form>
  );
}

export default Form
