import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem'; // Make sure to import the CartItem component

function Order() {
  const products = useSelector((state) => state.cart.cart);

  return (
    <div className='mt-5 w-8/12'>
  

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 h-full">
        <thead  className="text-xs text-gray-700 bg-white dark:text-gray-400 border border-gray-300">
        <tr className='h-6 rounded-lg'>
            <th className='w-1/12'></th>
            <th className='w-3/12'>Product</th>
            <th className='w-1/12'>Price</th>
            <th className='w-2/12'>Brand</th>
            <th className='w-1/12'>Quantity</th>
            <th className='w-1/12'>Total</th>
            <th className='w-2/12'>Status</th>
          </tr>
        </thead>
        <tbody className='w-full'>
        {products.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </tbody>
    </table>
    </div>
  );
}

export default Order;
