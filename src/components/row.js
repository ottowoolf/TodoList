import React from "react";

const Row = ({ todoList, setTodo }) => {
  const displayList = () => {
    return (
      <div>
        {todoList.map((item) => {
          return (
            <div className='task-item'>
              <li>
                <span>
                  <span className='number'> {item.id + 1} </span> {item.todo}
                </span>

                <button
                  onClick={() =>
                    setTodo(todoList.filter((i) => i.id !== item.id))
                  }
                >
                  X
                </button>
              </li>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className='list-container'>
      <ul>{displayList()}</ul>
    </div>
  );
};
export default Row;
