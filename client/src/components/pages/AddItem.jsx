import React from "react";

const AddItem = (props) => {
  return (
    <>
      <label> Enter the new todo item</label>
      <input
        type="text"
        value={props.currentTodo}
        onChange={props.updateCurrentTodo}
      />
      <button onClick={props.addTodo}>ADD</button>
      <br />
      <br />
    </>
  );
};

export default AddItem;
