import React, { useContext } from "react";
import {useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../css/successpage.css"

function SuccessPage() {
    const navigate = useNavigate()
    const {emptyCart} = useContext(CartContext)
    
    React.useEffect(() => {
        const timeout = setTimeout(() => navigate("/"), 2500)
        //Redirected from stripe
        if(document.referrer)
            emptyCart()
        return () => {
            clearTimeout(timeout)
        }
    }, [])


    return(
        <div className="success">
            <img className="success-img" src="/assets/images/success.png" alt="Success icon"/>
            <h1 className="success-text">Thank you for your purchase!</h1>
            <h2 className="success-subtext">You will be redirect to homepage in a moment!</h2>
        </div>

    )
}

export default SuccessPage