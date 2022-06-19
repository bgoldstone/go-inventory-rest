import { React, useState, useEffect } from "react";
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
            <tr
              key={item.ID}
              className="clickable"
              onClick={() => (window.location = `/item/${item.ID}`)}
              style={{ cursor: "pointer" }}
            >
              <td>{item.ID}</td>
              <td className="">{item["name"]}</td>
              <td className="px-3">{item["quantity"]}</td>
              <td className="px-3">${item["price"].toFixed(2)}</td>
              <td className="px-3">{item["description"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
