import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { markAsAccepted, markAsMissing } from '../Utils/cartSlice';
import AvocadoImg from '../Utils/Avocado Hass.jpg';
import AcceptStatus from './AcceptStatus'; // Import the AcceptStatus component
import MissingStatus from './MissingStatus'; // Import the MissingStatus component



function CartItem({ product }) {
  const [status, setStatus] = useState(product.status);

  const dispatch = useDispatch();

  const handleAccept = () => {
    setStatus('accept');
    dispatch(markAsAccepted(product.id));
  };




  const handleReject = () => {
    const userChoice = window.confirm('Mark as Missing?') ? 'missing' : 'missing-urgent';
    setStatus(userChoice);
    dispatch(markAsMissing({ id: product.id, status: userChoice }));
  };

  // Define statusComponent to conditionally render the status component
  let statusComponent;

  if (status === 'accept') {
    statusComponent = <AcceptStatus />; // Render AcceptStatus component
  } else if (status.includes('missing')) {
    statusComponent = <MissingStatus />; // Render MissingStatus component
  } else {
    // If neither AcceptStatus nor MissingStatus is rendered, provide a blank space
    statusComponent = <span>&nbsp;</span>;
  }

  return (
    <tr className='w-full'>
      <td><img className='w-5 h-5 ml-8' src={AvocadoImg} alt="Product Image" /></td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.brand}</td>
      <td>{product.quantity}</td>
      <td>{product.price * parseFloat(product.quantity)}</td>
      <td className='mx-5 w-full'>
        <div className='w-full flex flex-row'>
          <div className='w-6/12'>
            {statusComponent}
          </div>
          <button className='w-2/12' onClick={handleAccept} disabled={status === 'accept'}>
            ✓
          </button>
          <button className='w-2/12' onClick={handleReject} disabled={status.includes('missing')}>
            X
          </button>
          <button className='w-2/12'>Edit</button>
        </div>
      </td>
     
    </tr>
  );
}

export default CartItem;
