import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// composant affichant les tâches

const Tasks = ({ tasks, handleClickCheck, handleClickTrash }) => {
  // tableau des tâches en props
  return (
    <ul className="tasksList">
      {tasks.length > 0 &&
        tasks.map((task, index) => {
          return (
            <li key={index}>
              <div>
                <input
                  type="checkbox"
                  checked={task.done ? true : false} // je modifie le CSS en fonction de la valeur de la checkbox
                  onChange={() => handleClickCheck(index)} // au changement d'état , je change la propriété true ou false avec l'index de la tâche
                />
                <span key={index} className={task.done ? "done" : ""}>
                  {task.name}
                </span>
              </div>

              <FontAwesomeIcon
                onClick={() => handleClickTrash(index)}
                className="trash"
                icon="trash"
                size="1x"
              />
            </li>
          );
        })}
    </ul>
  );
};

export default Tasks;
