import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const [item, setItem] = useState({});
  const id = useParams().id | 0;
  useEffect(() => {
    console.log("Fetching");
    fetch(`http://localhost:8080/item/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data["Items"]);
      });
    console.log("Fetched");
  }, [id]);

  return (
    <div key={id}>
      <h1 className="">{item["name"]}</h1>
      <h2 className="px-3">Quantity: {item["quantity"]}</h2>
      <h2 className="px-3">Price: ${item["price"].toFixed(2)}</h2>
      <h2 className="px-3">Description: {item["description"]}</h2>
    </div>
  );
}
export default Item;
