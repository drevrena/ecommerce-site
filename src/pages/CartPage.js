import React, { useContext } from "react";
import { PaymentModalContext } from "../context/PaymentModalContext";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";
import "../css/cartpage.css"

 function CartPage() {
    const {items} = useContext(CartContext)
    const {setShow} = useContext(PaymentModalContext)
    const cartItems = items.map(item => <CartItem key={item.id} item={item}/>)
    const total = items.reduce((acc, curr) => acc + (curr.price * curr.amount), 0)

    function handleBuyNow() {
        if (cartItems.length <= 0)
            return
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
                    <h3 className="cart-total-amount">${total.toLocaleString()}</h3>
                </div>
                <button className="buy-now" onClick={handleBuyNow}>Buy now</button>
            </div>
        </div>
    )
}

export default CartPage