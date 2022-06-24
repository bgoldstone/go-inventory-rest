import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
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
      <Navbar />
      <div className="m-1 table-responsive container-fluid">
        <table className="table table table-striped table-hover align-middle">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th className="ps-5">Actions</th>
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
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Modify Item"
                  >
                    <Delete item={item} items={items} setItems={setItems} />
                    <Link
                      to={`/item/${item.ID}/update`}
                      className="btn btn-outline-edit button text-center"
                      type="button"
                    >
                      <i className="bi bi-pencil"> Edit</i>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col align-left mx-2">
          <Link to={"/item/add"} className="btn btn-success btn-lg">
            Add Item
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
