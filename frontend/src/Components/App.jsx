import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Delete from "./Delete";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data["Items"]);
      });
  }, []);

  return (
    <div>
      <div className="row m-2">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td>
                  <Link
                    to={`/item/${item.ID}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item.ID}
                  </Link>
                </td>
                <td className="">
                  <Link
                    to={`/item/${item.ID}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item["name"]}
                  </Link>
                </td>
                <td className="px-3">
                  <Link
                    to={`/item/${item.ID}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item["quantity"]}
                  </Link>
                </td>
                <td className="px-3">
                  <Link
                    to={`/item/${item.ID}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    ${item["price"].toFixed(2)}
                  </Link>
                </td>
                <td className="px-3">
                  <Link
                    to={`/item/${item.ID}`}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {item["description"]}
                  </Link>
                </td>
                <td className="justify-items-center">
                  <Delete item={item} items={items} setItems={setItems} />
                  <Link
                    to={`/item/${item.ID}/update`}
                    className="btn btn-edit text-very-light-gray px-3 mx-3"
                  >
                    <i className="bi bi-pencil"> Edit</i>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row col-1 mx-1 px-1">
        <Link to={"/item/add"} className="btn btn-success">
          Add Item
        </Link>
      </div>
    </div>
  );
}

export default App;
