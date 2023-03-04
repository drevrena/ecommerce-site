import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { NotificationManager } from 'react-notifications';
import Rating from "../components/Rating";
import "../css/productdetailpage.css"

function ProductDetailPage() {
    const data = useLoaderData()
    const {addItem} = useContext(CartContext)
    const {title, description, price, image, rating} = data

    function addToCart() {
        NotificationManager.success(`${title} has been added to the cart!`, `Congratulations!`, 1250)
        addItem({...data, amount: 1})
    }

    return (
        <div className="product-detail">
            <img className="product-detail-img" src={image} alt={title}/>
            <div className="product-content">
                <span className="product-name">{title}</span>
                <span className="product-desc">{description}</span>
                <div>
                    <span className="product-rate">{<Rating {...rating}/>}</span>
                    <span className="product-price">${price}</span>
                </div>
                <div className="product-btns">
                    <button className="product-detail-btn" onClick={addToCart} >Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage