import React from "react";

const Header = ({ setTodo, len }) => {
  var itemToAdd = "";
  const formHandler = (e) => {
    itemToAdd = e.target.firstChild.value;
    e.preventDefault();
    if (itemToAdd !== "" && itemToAdd.trim() !== "" && len < 5) {
      setTodo((state) => [...state, { id: len, todo: itemToAdd }]);
    }
    e.target.firstChild.value = "";
  };
  return (
    <div className='header-container'>
      <h1>Add to the List</h1>
      <form onSubmit={formHandler}>
        <input type='text' />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
};
export default Header;
