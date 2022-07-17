import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { item as defaultItem } from "../constants";
import Navbar from "./Navbar";

function Item() {
  const [item, setItem] = useState(defaultItem);
  const id = useParams().id;

  useEffect(() => {
    console.log("useEffect");
  });
  useEffect(
    function () {
      if (id === undefined) return;
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
      <Navbar />
      <div className="">
        <div className="pt-3 mx-auto justify-center text-7xl">
          <h1 className="text-9xl text-center pb-10 text-bold">
            {item["name"]}
          </h1>
          <div className="pl-5">
            <h3 className="my-5">
              <strong>Quantity:</strong> {item["quantity"]}
            </h3>
            <h3 className="my-5">
              <strong>Price:</strong> ${item["price"].toFixed(2)}
            </h3>
            <h3 className="my-5">
              <strong>Description:</strong> {item["description"]}
            </h3>
          </div>

          {/* <p className="card-text">
            <small className="text-muted">Updated at {item["UpdatedAt"]}</small>
          </p> */}
        </div>
      </div>
    </div>
  );
}
export default Item;
