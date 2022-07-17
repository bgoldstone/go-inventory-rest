import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <header className="">
        <div className="">
          <div className="container flex justify-left pt-5 ml-3">
            <strong>
              <Link
                to={"/"}
                className="text-black mx-auto rounded bg-amber-600 text-4xl p-2 hover:bg-amber-700"
              >
                <span className="">Inventory Management</span>
              </Link>
            </strong>
          </div>
          <nav className="flex mx-auto justify-end">
            <Link
              className="bg-green-600 hover:bg-green-500 px-2 cursor-pointer mx-3 rounded text-4xl font-bold"
              to={"/"}
            >
              Home
            </Link>
            <Link
              className="bg-green-600 hover:bg-green-500 px-2 cursor-pointer ml-2 mr-3 rounded text-4xl font-bold"
              to={"/item/add"}
            >
              Add Item
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
