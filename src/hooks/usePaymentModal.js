import { useContext } from "react"
import { PaymentModalContext } from "../context/PaymentModalContext"

function usePaymentModal() {
    const {show, setShow} = useContext(PaymentModalContext)
    return {show, setShow}
}

export default usePaymentModal