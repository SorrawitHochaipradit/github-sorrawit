import React from "react";
import { Card, Image } from "antd";

function CardProduct(props) {
  return (
    <Card title={props.data.title}>
      <Image src={props.data.url}></Image>
      <p>{props.data.description}</p>
    </Card>
  );
}

export default CardProduct;
