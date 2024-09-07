const Cards = [
  {
    id: "600dc3b5c4e60ba2ebf06569",
    name: "Howell Faulkner",
    titleText:
      "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
    address: "77 Hemlock Street, Hasty, Florida",
  },
  {
    id: "600dc3b5c4e60ba2ebf06569",
    name: "Howell Faulkner",
    titleText:
      "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
    address: "77 Hemlock Street, Hasty, Florida",
  },
  {
    id: "600dc3b5c4e60ba2ebf06569",
    name: "Howell Faulkner",
    titleText:
      "Mollit Lorem reprehenderit qui elit id aliqua. Deserunt ipsum ad cupidatat ullamco ut aliqua est do consectetur nostrud sit esse.",
    address: "77 Hemlock Street, Hasty, Florida",
  },
];

console.log(Cards);

function Card() {
  return Cards.map((item, id) => (
    <>
      <div className="cardContainer">
        <h1>hello card{item.titleText}</h1>
        <p>Students Name: {item.name}</p>
        <p>
          <strong>Email: </strong>
          {item.address}
        </p>
        <button className="button">Click me</button>
      </div>
    </>
  ));
}

/*
function Card(props) {
  const { titleText, names, address } = props;

  return (
    <>
      <div className="cardContainer">
        <h1>hello card{titleText}</h1>
        <p>Students Name: {names}</p>
        <p>
          <strong>Email: </strong>
          {address}
        </p>

        <button className="button">Click me</button>
      </div>
    </>
  );
}*/

export default Card;
