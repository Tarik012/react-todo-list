import { useState } from "react";

const Form = (props) => {
  const [itemToDoList, setItemTodoList] = useState("");
  const [todoList, setToDoList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemToDoList !== "") {
      setItemTodoList(itemToDoList);
      setToDoList([...todoList, itemToDoList]);
      console.log("itemToDoList =>", itemToDoList);
      console.log("todoList =>", todoList);
    } else {
      alert("attention champ vide !");
    }
  };
  // Ternaire pour afficher le formulaire ou le formulaire d'édition
  return (
    <div className="div-form">
      <div>
        <form onSubmit={handleSubmit}>
          <input
            onChange={(event) => {
              setItemTodoList(event.target.value);
            }}
            type="text"
            placeholder="new task"
            value={itemToDoList}
            name="inputText"
          ></input>

          <input type="submit" value="Add task"></input>
        </form>
      </div>
    </div>
  );
};

export default Form;
