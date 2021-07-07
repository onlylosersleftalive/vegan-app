import "./Form.css";
import React, { useState } from "react";

function Form(props) {
  const [userInput, setUserInput] = useState("");

  let inputChangeHandler = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    const enteredData = {
      ingridient: userInput,
    };
    props.onSaveFormData(enteredData);
    setUserInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>Add one or more ingridients:</label>
      <input type="text" onChange={inputChangeHandler} value={userInput} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
