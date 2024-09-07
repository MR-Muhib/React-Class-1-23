// import { useId } from "react";
// import { v4 as uuidv4 } from 'uuid';

// console.log(uuidv4);
import React from "react";
import { v4 as uuidv4 } from "uuid";

const todos = [
  {
    id: uuidv4(),
    title: "Profesonal Web Devoloper",
    name: "Helal Udddin",
    email: "helaluddin10@gmail.com",
  },
  {
    id: uuidv4(),
    title: "Profesonal Web Devoloper",
    name: "Junayed Ahmed",
    email: "junayed@gmail.com",
  },
  {
    id: uuidv4(),
    title: "Profesonal Web Devoloper",
    name: "Rasel Ahmed",
    email: "rasel500@gmail.com",
  },
  {
    id: uuidv4(),
    title: "Profesonal Web Devoloper",
    name: "Muhibur Rahman",
    email: "mrmuhib300@gmail.com",
  },
];

const Unickid = () => {
  return todos.map((item, uuidv4) => {
    const { title, name, email, id } = item;
    return (
      <div key={id}>
        <h1>{title}</h1>
        <h2>{name}</h2>
        <h3>{email}</h3>
      </div>
    );
  });
};
export default Unickid;
