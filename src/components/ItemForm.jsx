import { useState } from "react"
import SaveButton from "./SaveButton"
import PropTypes from "prop-types"
import { StockItem, CATEGORIES } from "../entities/StockItem.js"
import useStock from "../hooks/useStock"

ItemForm.propTypes = {
    itemToUpdate: PropTypes.object
}

export default function ItemForm({ itemToUpdate }) {
    const defaultItem = {
        name: "",
        description: "",
        quantity: 0,
        price: 0,
        category: 0
    }

    const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem)
    const { addItem } = useStock()

    function handleSubmit(event) {
        event.preventDefault()
        try {
            const validItem = new StockItem(item)
            addItem(validItem)
            console.log(validItem)
            setItem(defaultItem)
        }
        catch (error) {
            console.log(error)
            console.log(error.message)
        }
    }

    function handleChange(event) {
        setItem(currentState => {
            return {
                ...currentState,
                [event.target.name]: event.target.value
            }
        })
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row gap-3 mb-2">
                    <div className="col">
                        <label htmlFor="name" className="mb-2"> Nome </label>
                        <input
                            className="bg-dark p-2 rounded border-0"
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={item.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="quantity" className="mb-2"> Quantidade </label>
                        <input
                            className="bg-dark p-2 rounded border-0"
                            type="number"
                            id="quantity"
                            name="quantity"
                            required
                            value={item.quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="price" className="mb-2"> Preço </label>
                        <input
                            className="bg-dark p-2 rounded border-0"
                            type="number"
                            id="price"
                            name="price"
                            required
                            value={item.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col">
                        <label htmlFor="category" className="mb-2"> Categoria </label>
                        <select
                            className="form-select bg-dark p-2 rounded border-0"
                            aria-label="Default select example"
                            id="category"
                            name="category"
                            required
                            value={item.category}
                            onChange={handleChange}
                        >
                            <option defaultChecked value=""> Selecione uma categoria... </option>
                            {CATEGORIES.map((category) => (
                                <option
                                    key={category}
                                    value={category}
                                    defaultChecked={item.category === category}
                                >
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>


                <label htmlFor="description" className="mb-2 mt-3 ms-1"> Descrição </label>
                <div className="row m-1 mb-3">
                    <textarea
                        className="textarea bg-dark rounded border-0 col-12 p-2"
                        id="description"
                        name="description"
                        value={item.description}
                        onChange={handleChange}
                    />
                </div>

                <SaveButton />
            </form>
        </div>
    )
}
