export default function ListItem({ text, onButtonClick }) {
  return (
    <li>
      {text} <button onClick={onButtonClick}>Supprimer</button>
    </li>
  );
}
