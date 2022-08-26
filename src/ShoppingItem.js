export default function ShoppingItem({ id, name, onRemoveItem }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        {name}
      </label>
      <button onClick={() => onRemoveItem(id)}>Remove</button>
    </li>
  );
}

