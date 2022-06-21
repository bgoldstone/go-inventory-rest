import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
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
              <th>Delete</th>
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
                <td className="px-3">
                  <button
                    className="btn btn-danger text-dark"
                    onClick={() => {
                      // Sends Delete request
                      $.ajax({
                        url: `http://localhost:8080/item/${item.ID}`,
                        type: "DELETE",
                        success: () => {
                          setItems(
                            items.filter(
                              (allItems) => allItems.ID !== item["ID"]
                            )
                          );
                        },
                      });
                    }}
                  >
                    <i className="bi bi-trash"> Delete</i>
                  </button>
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
