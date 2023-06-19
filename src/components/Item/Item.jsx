import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';
import "./Item.css";

export const Item = ({ id, img, description, title, stock, price }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-12">
      <Card className="item">
        <Card.Img variant="top" src={img} className="item__img" />
        <Card.Body className="d-flex flex-column justify-content-center align-items-center">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="dark" className="antiquetty-btn"><Link to={`/item/${id}`} className="link2">Detalle</Link></Button>
        </Card.Body>
      </Card>
    </div>
  );
};