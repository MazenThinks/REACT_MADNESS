import Message from "./Message";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["New York", "San Francisco", "London", "Paris", "Tokyo"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
