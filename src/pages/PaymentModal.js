import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import usePaymentModal from "../hooks/usePaymentModal";
import FormInput from "../components/FormInput.js"
import "../css/paymentmodal.css"

function PaymentModal() {
    const {show, setShow} = usePaymentModal()
    const {emptyCart} = useContext(CartContext)
    const navigate = useNavigate()

    function handleSubmit(event) {
      event.preventDefault()
      // https://beta.reactjs.org/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
      const formData = new FormData(event.target)
      emptyCart()
      setShow(false)
      navigate("/success", {state: Object.fromEntries(formData.entries())})
    }

    return(
        <>
            {show && <div className="payment-modal">
                        <button className="modal-close" onClick={() => setShow(false)}>X</button>
                        <h1 className="modal-title">Credit Card</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-card">
                                <FormInput name="name" label="Cardholder Name"/>
                                <FormInput name="number" label="Card Number"/>
                                <div className="modal-card-inner">
                                    <FormInput name="date" label="Exp Date"/>
                                    <FormInput name="cvv" label="CVV"/>
                                </div>
                            </div>
                            <button className="modal-pay">Pay</button>
                        </form>
                    </div>}
            {show && <div className="bg"></div>}
        </>

    )
}

export default PaymentModal