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
      <div className="container-fluid">
        <div className="row">
          <div className="text-center col-12">
            <div className="card mb-3 border-success border-4">
              <div className="">
                <div className="card-body">
                  <h1 className="card-title">{item["name"]}</h1>
                  <h3 className="card-text">
                    <strong>Quantity:</strong> {item["quantity"]}
                  </h3>
                  <h3 className="card-text">
                    <strong>Price:</strong> ${item["price"].toFixed(2)}
                  </h3>
                  <h3 className="card-text">
                    <strong>Description:</strong> {item["description"]}
                  </h3>
                  {/* <p className="card-text">
            <small className="text-muted">Updated at {item["UpdatedAt"]}</small>
          </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
