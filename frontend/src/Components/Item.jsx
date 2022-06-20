import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { item as defaultItem } from "../constants";

function Item() {
  const [item, setItem] = useState(defaultItem);
  const id = useParams().id;

  useEffect(() => {
    console.log("useEffect");
  });
  useEffect(
    function () {
      if (id === undefined) return;
      console.log("Fetching");
      fetch(`http://localhost:8080/item/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setItem(data["Items"]);
        });
      console.log("Fetched");
    },
    [id]
  );
  return (
    <div key={id}>
      <h1 className="px-1">{item["name"]}</h1>
      <h2 className="px-3">Quantity: {item["quantity"]}</h2>
      <h2 className="px-3">Price: ${item["price"].toFixed(2)}</h2>
      <h2 className="px-3">Description: {item["description"]}</h2>
    </div>
  );
}
export default Item;
