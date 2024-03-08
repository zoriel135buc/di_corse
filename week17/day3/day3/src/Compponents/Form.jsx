import { useState } from "react";
const Form = (props) => {
  const [inputs, setInputs] = useState({
    FirstName: " ",
    LastName: " ",
    color: " ",
    Yesno: false,
    Text: " ",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputs=>", inputs);
  };
  const handleChange = (e) => {
    //     let value = ``;
    //     if (e.target.type === `checkbox`) {
    //       value = e.target.checked;
    //     } else {
    //       value = e.target.value;
    //     }
    //     let key = e.target.name;

    //     let newInputs = { ...inputs, [key]: value };
    //     setInputs(newInputs);
    //   };
    const value =
      e.target.type === `checkbox` ? e.target.checked : e.target.value;
    setInputs({ ...inputs, [e.target.name]: value });
  };
  return (
    <>
      <h3>Form Example</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        First Name:{" "}
        <input type="text" name="FirstName" onChange={(e) => handleChange(e)} />
        <br></br>
        Last Name:{" "}
        <input type="text" name="LastName" onInput={(e) => handleChange(e)} />
        <br></br>
        <select name="color" onChange={(e) => handleChange(e)}>
          <option value={"red"}>Red</option>
          <option value={"blue"}>Blue</option>
          <option value={"green"}>Green</option>
        </select>
        <br></br>
        Yes/No:
        <input name="Yesno" type="checkbox" onChange={(e) => handleChange(e)} />
        <br></br>
        <textarea name="Text" onChange={(e) => handleChange(e)}></textarea>
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default Form;
