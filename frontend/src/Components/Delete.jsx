import React from "react";

const Delete = ({ item, items, setItems }) => {
  return (
    <button
      className="rounded hover:bg-red-400 bg-red-500 p-2 mx-4 text-4xl"
      type="button"
      onClick={() => {
        // Sends Delete request
        fetch(`http://localhost:8080/item/${item.ID}`, {
          method: "DELETE",
        }).then(
          setItems(items.filter((currentItem) => currentItem.ID !== item.ID))
        );
      }}
    >
      <i className="bi bi-trash"></i> Delete
    </button>
  );
};

export default Delete;
