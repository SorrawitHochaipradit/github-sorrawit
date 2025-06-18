import React from "react";
import { Card, Image } from "antd";

function CardProduct(props) {
  return (
    <Card>
      {" "}
      title={props.data.title}
      <p>{props.data.description}</p>
    </Card>
  );
}

export default CardProduct;
