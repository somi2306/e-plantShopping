import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import './ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      {/* Example product data; replace this with actual data */}
      {[
        { name: 'Plant A', image: 'plant-a.jpg', cost: 20 },
        { name: 'Plant B', image: 'plant-b.jpg', cost: 30 },
      ].map(product => (
        <div key={product.name} className="product-item">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.cost}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
      <div>
        <h3>Total Items in Cart: {cartItems.length}</h3>
      </div>
    </div>
  );
};

export default ProductList;
