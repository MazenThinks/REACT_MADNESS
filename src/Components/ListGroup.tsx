import { Fragment } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "London", "Paris", "Tokyo"];

  items = [];

  const Zeroitems = () => {
    return items.length === 0 ? <p>No item found</p> : null;
  };

  return (
    <>
      <h1>List</h1>
      {Zeroitems()}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
