import { useState } from "react";

export default function NewElementForm({ onElementAdded }) {
  const [newElement, setNewElement] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const name = newElement;
    onElementAdded(name);
    setNewElement("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Ajouter un élément"
        value={newElement}
        onChange={(event) => setNewElement(event.target.value)}
      ></input>
      <button>Ajouter</button>
    </form>
  );
}
