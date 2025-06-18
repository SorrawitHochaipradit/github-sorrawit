import React from "react";
import CardProduct from "./components/CardProduct";
import { Row, Col } from "antd";

function App() {
  const data = [
    {
      id: 1,
      title: "laptop",
      description: "Lorem, ipsum dolor.",
    },
    {
      id: 2,
      title: "Smart Phone",
      description: "Lorem, ipsum dolor.",
    },
    {
      id: 3,
      title: "Computer",
      description: "Lorem, ipsum dolor.",
    },
  ];

  return (
    <Row>
      {data.map((item) => (
        <Col>
          <CardProduct data={item} />
        </Col>
      ))}
    </Row>
  );
}

export default App;
