import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import usePaymentModal from "../hooks/usePaymentModal";
import "../css/cartpage.css"

 function CartPage() {
    const {setShow} = usePaymentModal()
    const {items, getTotal} = useContext(CartContext)
    const cartItems = items.map(item => <CartItem key={item.id} item={item}/>)

    function handleBuyNow() {
        if (cartItems.length <= 0)
            return
        //Scroll to top in case cart-list is very long to have payment modal show up correctly
        window.scrollTo(0, 0)
        setShow(true)
    }

    return (
        <div className="cart-page">
            <div>
                {cartItems.length === 0 ?
                    <div className="cart-no-item">
                        <h1 className="cart-no-item-text">There's nothing in your cart!</h1>
                        <a className="return-btn" href="/">Go back Home</a>
                    </div> : cartItems}
            </div>
            <div className="cart-checkout">
                <div className="cart-total">
                    <p>Subtotal</p>
                    <h3 className="cart-total-amount">${getTotal().toFixed(2)}</h3>
                </div>
                <button className="buy-now" onClick={handleBuyNow}>Buy now</button>
            </div>
        </div>
    )
}

export default CartPage