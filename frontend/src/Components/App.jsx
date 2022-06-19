import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data["Items"]);
        data["Items"].map((item) => console.log(item["ID"]));
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
            <tr key={item.ID}>
              <Link to={"/item/" + item.ID}>
                <td>{item.ID}</td>
              </Link>
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
