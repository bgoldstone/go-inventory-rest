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
      <div className="flex justify-center">
        <table className=" text-5xl">
          <thead>
            <tr>
              <th className="px-3">ID</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Description</th>
              <th className="">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} flex mx-auto>
                <td className="px-3">
                  <Link to={`/item/${item.ID}`}>{item.ID}</Link>
                </td>
                <td className="">
                  <Link to={`/item/${item.ID}`}>{item["name"]}</Link>
                </td>
                <td className="px-3">
                  <Link to={`/item/${item.ID}`}>{item["quantity"]}</Link>
                </td>
                <td className="px-3">
                  <Link to={`/item/${item.ID}`}>
                    ${item["price"].toFixed(2)}
                  </Link>
                </td>
                <td className="px-3">
                  <Link to={`/item/${item.ID}`}>{item["description"]}</Link>
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
                      className=" text-slate-100 rounded text-4xl hover:bg-blue-700 bg-blue-800 p-2 mr-4 my-1"
                      type="button"
                    >
                      <i className="bi bi-pencil"> </i>Edit
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="row">
        <div className="col align-left mx-2"></div>
      </div>
    </div>
  );
}

export default App;
