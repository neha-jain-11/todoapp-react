import React from "react";

const ListItems = (props) => {
  return (
    <>
      <ul>
        {props.todos.map((todo, index) => {
          return (
            <>
              <li key={index}>
                <span
                  data-todo-id={todo.id}
                  onClick={props.updateStatus}
                  className={todo.status ? "li-span-strike" : ""}>
                  {todo.name}
                </span>
                &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                <button data-id={todo.id} onClick={props.deleteTodo}>
                  DELETE
                </button>
              </li>
            </>
          );
        })}
      </ul>
      <br />
    </>
  );
};

export default ListItems;
