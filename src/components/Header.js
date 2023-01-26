import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <>
      <div className="header">
        <FontAwesomeIcon
          className="list-alt"
          icon={["far", "list-alt"]}
          size="2x"
        />
        ToDoList
      </div>
    </>
  );
};

export default Header;
