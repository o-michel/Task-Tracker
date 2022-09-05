import React from "react";
import Button from "./button";
const Header = ({ title, onAdd, showAdd }) => {
  // const onClick = () => {};
  //  const name = "michellin";
  // const realName = "Micheal"

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        className="addButton"
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
