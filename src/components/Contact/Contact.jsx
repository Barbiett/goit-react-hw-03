export default function Contact({ handleClick: { id, name, number } }) {
  return (
    <div>
      <ul>
        <li>
          <span>{id}</span>
          <span>{name}</span>
          <span>{number}</span>
        </li>
        ;
      </ul>
    </div>
  );
}
