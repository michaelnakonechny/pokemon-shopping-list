import "./App.css";
import ShoppingItem from "./ShoppingItem";
import AddItemForm from "./AddItemForm";
import NewItem from "./NewItem"; 
import { useEffect, useState } from "react";
import "./fonts/PokemonFont.ttf";

const initialData = [
  { name: "Potion", id: "1", isDone: false},
  { name: "Pokeball", id: "2", isDone: false},
  { name: "Para Healer", id: "3", isDone: false},
  { name: "Superball", id: "4", isDone: false},
  { name: "Masterball", id: "5", isDone: false},
];

function App() {
  // SET USE STATE
  const [shoppingList, setShoppingList] = useState(loadFromLocal() || initialData);
  
  

  
  function loadFromLocal() {
    return JSON.parse(localStorage.getItem('_initialData'));
  }
  
  //const [shoppingList, setShoppingList] = useState(initialData);
  console.log(shoppingList);
  // 6. addTodo wird mit dem neuen Todo aufgerufen
  function addItem(newItem) {
    // 7. Neue State: Für das neue Todo an den Anfang
    // und übernehme alle bestehenden Todos
    setShoppingList([newItem, ...shoppingList]);
    
    // 8. Es wird von React ein Re-render der Komponent(n) angestossen
  }
  
  function removeItem(id) {
    console.log(id);
    setShoppingList(
      shoppingList.filter((ShoppingItem) => ShoppingItem.id !== id)
      );
    }
    console.log(removeItem);
    // SET USE STATEEND
    function toggleItem(initialDataId) {
      const updatedData = shoppingList.map((item) => {
        if (initialData.id === initialDataId) {
          initialData.isDone = !initialData.isDone;
        }
        return item;
      });
      setShoppingList(updatedData);
    }

  
  
    useEffect(() => {
      localStorage.setItem('_initialData', JSON.stringify(shoppingList));
    }, [shoppingList]);
    
    return (
      <div className="App">
      <header className="App-header">
        <h1> Pokemon Shopping List </h1>
      </header>
      <AddItemForm onAddItem={addItem} />
      <ul>
        {shoppingList.map((shopping) => (
          <ShoppingItem
          id={shopping.id}
          key={shopping.id}
          name={shopping.name}
            onRemoveItem={removeItem}
            onToggleItem={toggleItem}
            newItems={shopping.url}
            />
            ))}
      </ul>
          <NewItem />
    </div>
  );
}

export default App;
