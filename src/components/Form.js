import "./Form.css";

function Form(props) {
  return (
    <form>
      <label>Add one or more ingridients:</label>
      <input type="text" name="ingridient" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
