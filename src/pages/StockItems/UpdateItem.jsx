import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock.js"
import ItemForm from "../../components/ItemForm.jsx"

export default function UpdateItem() {
    const { getItem } = useStock()
    const { id } = useParams() // Pega os parametros parados na url, por exemplo, no arquivo router.jsx temos uma rota com :id, o nome precisa ser o que está após o sinal :

    const item = getItem(id)

    return (
        <>
            <h2 className="fw-light"> Atualizar item </h2>
            <h2 className="fw-light text-center mb-5"> {item.name} </h2>
            <ItemForm itemToUpdate={item} />
        </>
    )
}
