import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartItem({item}) {
    const {id, image, title, description, price, amount} = item
    const {addItem, removeItem} = useContext(CartContext)
    const navigate = useNavigate()

    return(
        <div className="cart-item">
            <img className="cart-item-img" src={image} alt={title} onClick={() => navigate(`/products/${id}`)}/>
            <div className="cart-item-content">
                <h1 className="cart-item-title">{title}</h1>
                <div className="cart-amount">
                    <button className="cart-amount-minus" onClick={() => removeItem(item)}>-</button>
                    <span className="cart-amount-count" >{amount}</span>
                    <button className="cart-amount-plus" onClick={() => addItem(item)}>+</button>
                </div>
                <span className="cart-item-price">${(price * amount).toFixed(2)}</span>
            <p className="cart-item-desc">{description}</p>
            </div>
        </div>
    )
}

export default CartItem