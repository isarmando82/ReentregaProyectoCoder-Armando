import { useState } from 'react';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CheckoutForm = ({ onCheckout, cart }) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (isNaN(value)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El número de celular debe contener solo dígitos numéricos',
      });
    } else {
      setPhoneNumber(value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleConfirmEmailChange = (e) => {
    setConfirmEmail(e.target.value);
  };

  const handleCheckout = () => {
    if (email !== confirmEmail) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Los correos electrónicos no coinciden',
      });
      return;
    }

    if (!name || !phoneNumber || !email || !confirmEmail) {
      toast.error('Por favor, completa todos los campos requeridos');
      return;
    }

    const order = {
      name,
      phoneNumber,
      email,
      products: cart.map((item) => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
      })),
      timestamp: new Date().toISOString(),
    };

    onCheckout(order);
  };

  return (
    <div>
      <ToastContainer />
      <form className="m-4">
        <div>
          <label className="m-3">Nombre y Apellido:</label>
          <input required type="text" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label className="m-3">Numero de Celular:</label>
          <input type="tel" pattern="[0-9]+" value={phoneNumber} required onChange={handlePhoneNumberChange} />
        </div>
        <div>
          <label className="m-3">Correo Electronico:</label>
          <input type="email" value={email} required onChange={handleEmailChange} />
        </div>
        <div>
          <label className="m-3">Confirmar Correo Electronico:</label>
          <input type="email" value={confirmEmail} required onChange={handleConfirmEmailChange} />
        </div>
        <button type="button" className="m-4 p-3 rounded" onClick={handleCheckout}>
          Realizar Compra
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
