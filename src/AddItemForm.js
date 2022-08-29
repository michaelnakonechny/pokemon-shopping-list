import { nanoid } from "nanoid";
import pokeBall from "./img/pokeBall.png";
console.log(pokeBall);
// 1. Step: AddItemForm als Komponente erstellen
export default function AddItemForm({ onAddItem }) {
  // 3. Nimmt den Value aus dem Input Field
  function handleSubmit(event) {
    // Formular nicht ins Nirvana schicken
    event.preventDefault();

    const form = event.target;
    const inputValue = form.name.value;
    // "addItem" => {id: 1234, name: "addItem"}

    // 4. Object erstellen mit allen Informationen, die ein Todo benötigt
    const addItem = { id: nanoid(), name: inputValue };

    // 5. Rufe die Funktonen aus, die uns als Prop mitgegeben wurde
    // und übergebe das newTodo
    onAddItem(addItem); // => addItem() Funktion in der App.js

    form.reset();
    form.name.focus();
  }

  // 2. onSubmit Handler => handleSubmit(event)
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <strong>Add a new item</strong>
      </label>
      <br />
      <input type="text" name="name" id="name" />
      <button className="addButton"> </button>
    </form>
  );
}
