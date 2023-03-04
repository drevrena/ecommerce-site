import React, { useContext, useEffect, useState } from "react";
import { PaymentModalContext } from "../context/PaymentModalContext";
import { CartContext } from "../context/CartContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import "../css/paymentmodal.css"

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

function PaymentModal() {
    const {show, setShow} = useContext(PaymentModalContext)
    const {items} = useContext(CartContext)
    const [secret, setSecret] = useState()
    const [loading, setLoading] = useState(true)

    const options = {
        clientSecret: secret,
    };

    useEffect(() => {
        if(show) {
            const total = items.reduce((acc,curr) => acc + (curr.price * curr.amount), 0)
            fetch(`${process.env.REACT_APP_AWS_STRIPE}/?amount=${Math.floor(total * 100)}`)
                .then(res => res.json())
                .then(data => setSecret(data.client_secret))
                .finally(() => setLoading(false))
        }
    }, [show, items])
    
    return(
        show && <>  
            <div className="payment-modal">
                <button className="modal-close" onClick={() => setShow(false)}>X</button>
                {loading ?  <div className="lds-dual-ring"></div> : 
                <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements>}
            </div>
            <div className="bg"></div>
        </>
    )
}

export default PaymentModal