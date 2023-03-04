import { useState, createContext } from "react";

const PaymentModalContext = createContext()

function PaymentModalContextProvider({children}) {
    const [show, setShow] = useState()

    return <PaymentModalContext.Provider value={{show, setShow}}>
        {children}
    </PaymentModalContext.Provider>
}

export {PaymentModalContextProvider, PaymentModalContext}