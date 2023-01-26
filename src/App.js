import "./App.css";
import { useState } from "react";

import Form from "./components/Form";
import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt as farListAlt } from "@fortawesome/free-regular-svg-icons";
library.add(faTrash, faListAlt, farListAlt);

function App() {
  const [todoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <Header />
      <div>
        {todoList.map((todolist, index) => {
          return <div key={index}>{todoList}</div>;
        })}
      </div>
      <Form todoList={todoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
