import { React, useState, useEffect } from "react";
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
    <div className="container-fluid">
      {items.map((item) => (
        <div key={item.ID}>
          <h1 className="">{item["name"]}</h1>
          <h2 className="px-3">Quantity: {item["quantity"]}</h2>
          <h2 className="px-3">Price: ${item["price"].toFixed(2)}</h2>
          <h2 className="px-3">Description: {item["description"]}</h2>

          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default App;
