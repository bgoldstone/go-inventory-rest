import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div className="row p-3">
      <table className="table table-striped table-hover">
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Description</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
