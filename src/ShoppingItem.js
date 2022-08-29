export default function ShoppingItem({ id, name, onRemoveItem }) {
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{name}</span>
      </label>
      <button className="removeButton" onClick={() => onRemoveItem(id)}>
        {" "}
      </button>
    </li>
  );
}
