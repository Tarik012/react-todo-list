import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";

// import des icônes list et poubelle

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faListAlt } from "@fortawesome/free-solid-svg-icons";
import { faListAlt as farListAlt } from "@fortawesome/free-regular-svg-icons";
library.add(faTrash, faListAlt, farListAlt);

function App() {
  // state pour stocker la valeur de l'input dans le formulaire
  const [input, setInput] = useState("");
  // state pour stocker la liste des tâches dans un tableau
  const [tasks, setTasks] = useState([]);

  // fonction déclenchée quand on renseigne l'input du formulaire
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  //  fonction déclenchée à la soumission du formulaire
  const handleSubmit = (event) => {
    // empêche le rafraîchissement de la page à la soumission du formulaire
    event.preventDefault();

    if (!input) {
      alert("veuillez renseigner une tâche !");
    } else {
      // on effectue une copie superficielle du tableau des tâches
      // en ajoutant la nouvelle tâche avec son nom et son statut dans un objet
      let newTasks = [...tasks, { name: input, done: false }];
      // on met à jour le state contenant le tableau des tâches
      setTasks(newTasks);
      // on réinitialize la valeur de l'input
      setInput("");
    }
  };

  return (
    <div className="App">
      <Header />
      <Tasks tasks={tasks} />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <Footer />
    </div>
  );
}

export default App;
