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
      let arrOfIngredients = enteredFormData.split(" ");

      const checkedIngredient =
        arrOfIngredients.length > 1
          ? isVegan.isVeganIngredientList(arrOfIngredients)
          : isVegan.isVeganIngredient(enteredFormData);
      const nonVeganIngredients =
        isVegan.containsNonVeganIngredients(arrOfIngredients);

      return { checkedIngredient, nonVeganIngredients };
    });
  };
  console.log(ingredientStatus);
  return (
    <div>
      <div className="main">
        <h1 className="title">Check if your food ingridients are vegan</h1>
        <Form onSaveFormData={saveFormDataHandler} />
        {ingredientStatus.checkedIngredient === true ? <Vegan /> : <NotVegan />}
        {ingredientStatus.checkedIngredient === false &&
          ingredientStatus.nonVeganIngredients !== undefined && (
            <p>
              The non-vegan ingredient(s) from your list:
              {ingredientStatus.nonVeganIngredients.join(" ")}
            </p>
          )}
      </div>
      <div className="footer">
        <p>Made by Sveta M.</p>
      </div>
    </div>
  );
}

export default App;
