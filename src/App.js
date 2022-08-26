import "./App.css";
import ShoppingItem from "./ShoppingItem";

const shoppingList = [
  { name: "Potion", id: "1" },
  { name: "Pokeball", id: "2" },
  { name: "Para Healer", id: "3" },
  { name: "Superball", id: "4" },
  { name: "Masterball", id: "5" },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Pokemon Shopping List </h1>
      </header>
      {/* function ShoppingItem({(countItem, onAddItem)}) {} */}
      <ul>
        {shoppingList.map((shopping) => (
          <ShoppingItem key={shopping.id} name={shopping.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
