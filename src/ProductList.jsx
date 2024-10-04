import React, { useState } from 'react';
import './ProductList.css';
import CartItem from './CartItem';

function ProductList() {
    const [showCart, setShowCart] = useState(false);
    const [showPlants, setShowPlants] = useState(true); // Start by showing the plants by default
    const [cartItems, setCartItems] = useState([]); // State to store cart items

    const plantsArray = [
        // Your plant data remains unchanged
    ];

    const styleObj = {
        backgroundColor: '#4CAF50',
        color: '#fff',
        padding: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '20px',
    };
    const styleObjUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '1100px',
    };
    const styleA = {
        color: 'white',
        fontSize: '30px',
        textDecoration: 'none',
    };

    // Function to handle cart visibility
    const handleCartClick = (e) => {
        e.preventDefault();
        setShowCart(true);
        setShowPlants(false);
    };

    // Function to handle Plants visibility
    const handlePlantsClick = (e) => {
        e.preventDefault();
        setShowPlants(true);
        setShowCart(false);
    };

    // Function to add items to cart
    const handleAddToCart = (plant) => {
        setCartItems((prevItems) => [...prevItems, plant]);
    };

    // Function to render plants
    const renderPlants = () => {
        return plantsArray.map((category, index) => (
            <div key={index}>
                <h2>{category.category}</h2>
                <div className="plant-category">
                    {category.plants.map((plant, idx) => (
                        <div key={idx} className="plant-item">
                            <img src={plant.image} alt={plant.name} />
                            <h3>{plant.name}</h3>
                            <p>{plant.description}</p>
                            <p>{plant.cost}</p>
                            <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
                        </div>
                    ))}
                </div>
            </div>
        ));
    };

    // Function to render cart items
    const renderCart = () => {
        return cartItems.length > 0 ? (
            <div className="cart-items">
                {cartItems.map((item, index) => (
                    <CartItem key={index} plant={item} />
                ))}
                <button onClick={() => setShowCart(false)}>Continue Shopping</button>
            </div>
        ) : (
            <div className="empty-cart">
                <h2>Your cart is empty</h2>
                <button onClick={() => setShowPlants(true)}>Back to Plants</button>
            </div>
        );
    };

    return (
        <div>
            <div className="navbar" style={styleObj}>
                <div className="luxury">
                    <img
                        src="https://cdn.pixabay.com/photo/2020/08/05/13/12/eco-5465432_1280.png"
                        alt="Logo"
                    />
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <div>
                            <h3 style={{ color: 'white' }}>Paradise Nursery</h3>
                            <i style={{ color: 'white' }}>Where Green Meets Serenity</i>
                        </div>
                    </a>
                </div>

                <div style={styleObjUl}>
                    <div>
                        <a href="#" onClick={handlePlantsClick} style={styleA}>
                            Plants
                        </a>
                    </div>
                    <div>
                        <a href="#" onClick={handleCartClick} style={styleA}>
                            <h1 className="cart">🛒</h1>
                        </a>
                    </div>
                </div>
            </div>

            <div className="content">
                {showPlants && renderPlants()}
                {showCart && renderCart()}
            </div>
        </div>
    );
}

export default ProductList;
