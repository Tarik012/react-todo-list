import { useState } from "react";

const Form = ({ todoList, setToDoList }) => {
  const [itemToDoList, setItemTodoList] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (itemToDoList !== "") {
      setItemTodoList(itemToDoList);
      const newTodoList = [...todoList];
      setToDoList(newTodoList);
      console.log("itemToDoList =>", itemToDoList);
      console.log("todoList =>", newTodoList);
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
