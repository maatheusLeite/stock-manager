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

    function getItem(itemId) {
        return items.find(item => item.id === +itemId)
    }

    function addItem(item) {
        setItems(currentState => {
            const updatedItems = [item, ...currentState]
            localStorage.setItem('ml-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    function updateItem(itemId, newAttributes) {
        setItems(currentState => {
            const itemIndex = currentState.findIndex(item => item.id === +itemId) // Pega o indice onde o item está armazenado no array
            const updatedItems = [...currentState] // Cria uma copia do array dos items
            Object.assign(updatedItems[itemIndex], newAttributes, { updatedAt: new Date()}) // Por meio do Object, o objeto é encontrado no indice indicado do array e são setados seus novos atributos e sua data de atualização é atualizada
            localStorage.setItem('ml-react-stock', JSON.stringify(updatedItems)) // Salva novo item no local-storage
            return updatedItems
        })
    }

    function deleteItem(itemId) {
        setItems(currentState => {
            const updatedItems = currentState.filter(item => item.id !== itemId) // Cria um novo array com todos os itens originais exceto o com o ID expecificado
            localStorage.setItem('ml-react-stock', JSON.stringify(updatedItems))
            return updatedItems
        })
    }

    // Valores e funções a serem exportadas
    const stock = {
        items,
        addItem,
        getItem,
        updateItem,
        deleteItem
    }

    return (
        <StockContext.Provider value={stock}>
            {children}
        </StockContext.Provider>
    )
}