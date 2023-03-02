import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { NotificationManager } from 'react-notifications';
import Rating from "./Rating";



function Product(props) {
    const navigate = useNavigate()
    const {addItem} = useContext(CartContext)
    const {id, title, price, image, rating} = props

    function handleBuy() {
        NotificationManager.success(`${title} has been added to the cart!`, `Congratulations!`, 1250)
        addItem({...props, amount: 1})
    }

    return (
        <div className="product-card">
            <img className="product-card-img" src={image} alt={title} onClick={() => navigate(`/products/${id}`)}/>
            <div className="product-content">
                <span className="product-name">{title}</span>
                <div>
                    <span className="product-rate"><Rating {...rating}/></span>
                    <span className="product-price">${price}</span>
                </div>
            </div>
            <button className="product-buy" onClick={handleBuy}>Buy</button>
        </div>
    )
}

export default Product