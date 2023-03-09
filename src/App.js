import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import CheckedTasks from "./components/CheckedTasks";
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
  // state pour stocker la liste des tâches dans un tableau
  const [checkedTasks, setCheckedTasks] = useState([]);

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
      let newTasks = [
        ...tasks,
        {
          name: input.length > 30 ? input.substring(0, 30) + "..." : input,
          done: false,
        },
      ];
      // on met à jour le state contenant le tableau des tâches
      setTasks(newTasks);
      // on réinitialize la valeur de l'input
      setInput("");
    }
  };

  // fonction déclenchée quand on clique sur la checkbox
  const handleClickCheck = (index) => {
    let newTasks = [...tasks];
    // avec l'index, je modifie la valeur de la clé done de la tâche
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);

    // je crée une copie du tableau que sera dans le useState (pour le réutiliser) contenant les tâches barrées pour les afficher en dessous du formulaire
    // pas de copie du tableau initial sinon à chaque fois il sera supprimé (il ne contiendra qu'un seul élément)
    let tab = [...checkedTasks];
    tab.push(newTasks[index]);

    // console.log("tab =>", tab);
    // console.log("checkedTasks =>", checkedTasks);

    // je supprime cette tâche barrée de la liste des tâches (au dessus du formulaire)
    newTasks.splice(newTasks.indexOf(newTasks[index]), 1);
    setTasks(newTasks);

    //je mets à jour le state des tâches barrées
    setCheckedTasks(tab);
  };

  // fonction déclenchée quand on clique sur la poubelle
  const handleClickTrash = (index) => {
    let newTasks = [...tasks];
    // avec l'index, je supprime la tâche du tableau
    // indexOf renvoie la 1ere occurence sinon -1
    // splice renvoie le tableau sans l'occurence
    newTasks.splice(newTasks.indexOf(newTasks[index]), 1);
    setTasks(newTasks);
  };

  // fonction déclenchée au clic sur la corbeille pour supprimer les tâches barrées
  const handleDeleteCheckedTasks = () => {
    setCheckedTasks([]);
  };

  return (
    <div className="App">
      <Header />
      <Tasks
        tasks={tasks}
        handleClickCheck={handleClickCheck}
        handleClickTrash={handleClickTrash}
      />
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        input={input}
      />
      <Footer />
      <CheckedTasks
        checkedTasks={checkedTasks}
        handleDeleteCheckedTasks={handleDeleteCheckedTasks}
      />
    </div>
  );
}

export default App;
