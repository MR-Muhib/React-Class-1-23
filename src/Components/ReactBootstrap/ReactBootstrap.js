import React from "react";

// import Button from 'react-bootstrap/Button';

// or less ideally

import Nav from "react-bootstrap/Nav";

function PillsExample() {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Option 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default PillsExample;

// const ReactBootstrap =()=>{
//   return(
//    <div>
//     <h1>React Use by Bootstrap</h1>
//     <p>Hi there this using bootstrap desgin</p>
//     <button>Bootstrap</button>
//     <Button variant="primary">Primary</Button>
//    </div>
//   )
// }

// export default ReactBootstrap;
