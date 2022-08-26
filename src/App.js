import "./App.css";
import ShoppingItem from "./ShoppingItem";
import AddItemForm from "./AddItemForm";
import { useState } from "react";

const shopping = [
  { name: "Potion", id: "1" },
  { name: "Pokeball", id: "2" },
  { name: "Para Healer", id: "3" },
  { name: "Superball", id: "4" },
  { name: "Masterball", id: "5" },
];

function App() {
  // SET USE STATE

  const [shoppingList, setShoppingList] = useState(shopping);

  // 6. addTodo wird mit dem neuen Todo aufgerufen
  function addItem(newItem) {
    // 7. Neue State: Für das neue Todo an den Anfang
    // und übernehme alle bestehenden Todos
    setShoppingList([newItem, ...shopping]);

    // 8. Es wird von React ein Re-render der Komponent(n) angestossen
  }

  function removeItem(id) {
    setShoppingList(shopping.filter((shoppingItem) => shoppingItem.id !== id));
  }

  // SET USE STATEEND

  return (
    <div className="App">
      <header className="App-header">
        <h1> Pokemon Shopping List </h1>
      </header>
      <AddItemForm countItem={shoppingList.length} onAddItem={addItem} />
      <ul>
        {shoppingList.map((shopping) => (
          <ShoppingItem key={shopping.id} name={shopping.name} />
        ))}
      </ul>
    </div>
  );
}

export default App;
