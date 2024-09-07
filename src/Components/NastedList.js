const Userses = [
  {
    fullName: "Muhibur Rahman",
    age: 24,
    contact: [{ phone: "01741 877607" }, { email: "mrmuhib300@gmail.com" }],
  },
  {
    name: "Muhibur Rahman",
    age: 24,
    contact: [{ phone: "01741 877607" }, { email: "mrmuhib300@gmail.com" }],
  },
];

const Nastedlist = () => {
  return Userses.map((user, index) => (
    <article>
      <h1>{user.name}</h1>
      <h1>{`Age : ${user.age}`}</h1>
      {user.contact.map((contac, index) => (
        <div>
          <h2>{contac.phone}</h2>
          <p>{contac.email}</p>
        </div>
      ))}
    </article>
  ));
};
export default Nastedlist;
