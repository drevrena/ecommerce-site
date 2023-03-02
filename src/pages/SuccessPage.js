import React from "react";
import {useLocation, useNavigate } from "react-router-dom";
import "../css/successpage.css"

function SuccessPage() {
    const {state} = useLocation()
    const navigate = useNavigate()
    
    React.useEffect(() => {
        const timeout = setTimeout(() => navigate("/"), 2500)
        return () => {
            clearTimeout(timeout)
        }
    })

    return(
        <div className="success">
            <img className="success-img" src="/assets/images/success.png" alt="Big Thumbs up"/>
            <h1 className="success-text">Thank you for your purchase {state.name}.</h1>
            <h2 className="success-subtext">You will be redirect to homepage in a moment!</h2>
        </div>

    )
}

export default SuccessPage