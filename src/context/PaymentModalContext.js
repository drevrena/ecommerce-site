import { createContext, useState} from "react"

const PaymentModalContext  = createContext()

function PaymentModalContextProvider({children}) {
    const [show, setShow] = useState(false)

    return <PaymentModalContext.Provider value={{show, setShow}}>
                {children}
            </PaymentModalContext.Provider>
}

export {PaymentModalContextProvider, PaymentModalContext}