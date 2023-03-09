import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CheckedTasks = ({ checkedTasks, handleDeleteCheckedTasks }) => {
  return (
    checkedTasks.length > 0 && (
      <>
        <FontAwesomeIcon
          className="trash"
          icon="trash"
          size="1x"
          onClick={handleDeleteCheckedTasks}
        />
        <ul className="tasksList">
          {checkedTasks.map((checkedtask, index) => {
            return (
              <li key={index}>
                <div>
                  <span key={index} className={checkedtask.done ? "done" : ""}>
                    {checkedtask.name}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </>
    )
  );
};

export default CheckedTasks;
