import { createContext, useEffect, useState} from "react"

const CartContext  = createContext()

function CartContextProvider({children}) {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem("cartItems")) || [])

    //Update localStorage when items change
    useEffect(updateLocalStorage, [items])

    function updateLocalStorage() {
        localStorage.setItem("cartItems", JSON.stringify(items))
    }

    function emptyCart() {
        setItems([])
    }

    function addItem(toAdd) {
        setItems(prevItems => {
            const toUpdate = items.find(item => item.id === toAdd.id)
            if(toUpdate) {
                toUpdate.amount += 1
                return [...prevItems]
            } else {
                return [...prevItems, toAdd]
            }
        })
    }

    function removeItem(toRemove) {
        setItems(prevItems => {
            const toUpdate = items.find(item => item.id === toRemove.id)
            if(toUpdate && toUpdate.amount > 1) {
                toUpdate.amount -= 1
                return [...prevItems]
            } else {
                let toRemoveIdx = prevItems.indexOf(toUpdate)
                prevItems.splice(toRemoveIdx, 1)
                return [...prevItems]
            }
        })
    }

    return <CartContext.Provider value={{items, addItem, removeItem, emptyCart}}>
                {children}
            </CartContext.Provider>
}

export {CartContextProvider, CartContext}