import "./ItemDetail.css";
import ItemCount from "../Contador/ItemCount";
import Card from "react-bootstrap/Card";
import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ItemDetail = ({ data }) => {
  const { id, img, title, description, stock, price } = data || {};
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);
    const item = {
      id, img, title, description, stock, price
    };

    if (quantity <= stock) {
      addItem(item, quantity);
    } else {
      alert("No hay suficiente stock disponible");
    }
  };

  if (!data) {
    return null;
  }

  return (
    <div className="item-det">
      <Card className="item-card">
        <div className="item-img">
          <Card.Img variant="top" src={img} />
        </div>
        <Card.Body className="item-body">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>$ {price}</Card.Text>
          <Card.Text>Stock: {stock}</Card.Text>
          {
            quantityAdded > 0 ? (
              <Link to="/cart" className="btn btn-dark btn-block">Terminar compra</Link>
            ) : (
              <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
            )
          }
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;



