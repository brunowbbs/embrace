import "./styles.css";

export default function Button(props) {
  const { title, onClick } = props;

  return (
    <button onClick={onClick} className="button_component">
      {title}
    </button>
  );
}
