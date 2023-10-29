import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { markAsAccepted, markAsMissing } from '../Utils/cartSlice';
import AvocadoImg from '../Utils/Avocado Hass.jpg';
import AcceptStatus from './AcceptStatus'; 
import MissingStatus from './MissingStatus'; 



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


  let statusComponent;

  if (status === 'accept') {
    statusComponent = <AcceptStatus />; 
  } else if (status.includes('missing')) {
    statusComponent = <MissingStatus />; 
  } else {
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
