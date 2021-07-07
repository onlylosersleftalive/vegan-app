import "./App.css";

import Form from "./components/Form";

function App() {
  return (
    <div>
      <div className="main">
        <h1 className="title">Check if your food ingridients are vegan</h1>
        <Form />
      </div>
      <div className="footer">
        <p>Made by Sveta M.</p>
      </div>
    </div>
  );
}

export default App;
