import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div className="text-center">
        <h1 className="m-4">No hay items en el carrito</h1>
        <div className="d-flex justify-content-center">
          <button className="rounded m-4 p-3">
            <Link to="/" className="nn">
              Hacer compras
            </Link>
          </button>
          <button className="rounded m-4 p-3" onClick={() => clearCart()}>
            Limpiar Carrito
          </button>
        </div>
      </div>
    );
  }

  const formattedTotal = total.toLocaleString("es", {
    useGrouping: true,
    minimumFractionDigits: 2,
  }).replace(".", ",");

  return (
    <div>
      {cart.map((p) => (
        <CartItem key={p.id} {...p} />
      ))}
      <h3 className="m-4">Total: ${formattedTotal}</h3>
      <div className="d-flex justify-content-center">
        <button className="m-4 p-3 rounded">
          <Link to="/" className="nn">
            Agregar Producto
          </Link>
        </button>
        <button className="m-4 p-3 rounded" onClick={() => clearCart()}>
          Limpiar Carrito
        </button>
        <button className="m-4 p-3 rounded">
          <Link to="/checkout" className="nn rounded-button">
            Checkout
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Cart;


