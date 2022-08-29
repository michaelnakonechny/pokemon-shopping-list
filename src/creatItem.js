export default function addForm({ countItems, onAddItem }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const inputValue = form.name.value;
    const newItem = { id: countItems + 1, name: inputValue };

    onAddItem(newItem);
    form.reset();
    form.name.focus();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        <strong> Add a new item</strong>
      </label>
      <br />
      <input type="text" name="name" id="name" />
      <button>Add Item</button>
    </form>
  );
}
