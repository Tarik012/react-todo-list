const Tasks = ({ tasks }) => {
  return (
    <ul className="tasksList">
      {tasks.length > 0 &&
        tasks.map((task, index) => {
          return <li key={index}>{task.name}</li>;
        })}
    </ul>
  );
};

export default Tasks;
