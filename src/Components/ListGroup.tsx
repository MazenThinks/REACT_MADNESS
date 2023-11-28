import { Fragment } from "react";

function ListGroup() {
    const items = [
        'New York',
        'San Francisco',
        'London',
        'Paris',
        'Tokyo'
    ];
    
    
    return (
        <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map(item => <li>{item}</li>)}
      </ul>
    </>
  );
}

export default ListGroup;