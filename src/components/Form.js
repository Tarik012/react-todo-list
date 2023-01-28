import "../App.css";

const Form = ({ handleSubmit, handleChange, input }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        type="text"
        placeholder="nouvelle tâche"
        value={input}
      ></input>
      <input type="submit" value="Ajouter une tâche"></input>
    </form>
  );
};

export default Form;
