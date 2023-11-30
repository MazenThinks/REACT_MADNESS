import { Fragment, useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris", "Tokyo"];

  // hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 ? (
        <p>No item found</p>
      ) : (
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              key={item}
              onClick={() => {
                setSelectedIndex(index);
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default ListGroup;
