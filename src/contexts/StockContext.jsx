import { createContext, useState } from "react";
import PropTypes from "prop-types"

StockContextProvider.propTypes = {
    children: PropTypes.node
}

export const StockContext = createContext({})

export function StockContextProvider({ children }) {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('ml-react-stock')
        if (!storedItems) {
            return []
        }
        const items = JSON.parse(storedItems)
        items.forEach(item => {
            item.createdAt = new Date(item.createdAt)
            item.updateAt = new Date(item.updateAt)
        })
        return items
    })

    function addItem(item) {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem('ml-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    const stock = {
        items,
        addItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}