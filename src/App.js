import { useState } from "react";
import ListItem from "./components/ListItem";
import NewElementForm from "./components/NewElementForm";

export default function App() {
  const [elements, setElements] = useState([
    { id: 1, name: "plim" },
    { id: 2, name: "plam" },
    { id: 3, name: "ploum" }
  ]);

  const onListItemButtonClick = (id) => {
    setElements([...elements].filter((e) => e.id !== id));
  };

  const onElementAdded = (name) => {
    const id = new Date().getTime();
    setElements([...elements, { id, name }]);
  };

  return (
    <div className="App">
      <h1>On s'amuse un peu</h1>
      <ul>
        {elements.map((e) => (
          <ListItem
            key={e.id}
            text={e.name}
            onButtonClick={() => onListItemButtonClick(e.id)}
          />
        ))}
      </ul>

      <NewElementForm onElementAdded={onElementAdded} />

      <p>Il y a {elements.length} éléments.</p>
    </div>
  );
}
