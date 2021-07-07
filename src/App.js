import "./App.css";

import * as isVegan from "is-vegan";
import Form from "./components/Form";

function App() {
  let saveFormDataHandler = (enteredFormData) => {
    const formData = {
      ...enteredFormData,
    };
    console.log(formData);
  };

  return (
    <div>
      <div className="main">
        <h1 className="title">Check if your food ingridients are vegan</h1>
        <Form onSaveFormData={saveFormDataHandler} />
      </div>
      <div className="footer">
        <p>Made by Sveta M.</p>
      </div>
    </div>
  );
}

export default App;
