import "./App.css";
import React, { useState } from "react";
import Form from "./components/Form";
import * as isVegan from "is-vegan";
import Vegan from "./components/Vegan";
import NotVegan from "./components/NotVegan";

function App() {
  const [ingredientStatus, setIngredientStatus] = useState({
    checkedIngredient: false,
  });
  let saveFormDataHandler = (enteredFormData) => {
    setIngredientStatus(() => {
      const checkedIngredient = isVegan.isVeganIngredient(enteredFormData);
      console.log(checkedIngredient);
      console.log(ingredientStatus);
      return { checkedIngredient };
    });
  };

  return (
    <div>
      <div className="main">
        <h1 className="title">Check if your food ingridients are vegan</h1>
        <Form onSaveFormData={saveFormDataHandler} />
        {ingredientStatus.checkedIngredient === true ? <Vegan /> : <NotVegan />}
      </div>
      <div className="footer">
        <p>Made by Sveta M.</p>
      </div>
    </div>
  );
}

export default App;
