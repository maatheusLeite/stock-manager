import { useParams } from "react-router-dom"
import useStock from "../../hooks/useStock.js"
import Button from "../../components/Button.jsx"
import DeleteButton from "../../components/DeleteButton.jsx"

export default function ShowItem() {
    const { getItem } = useStock()
    const { id } = useParams() // Pega os parametros parados na url, por exemplo, no arquivo router.jsx temos uma rota com :id, o nome precisa ser o que está após o sinal :

    const item = getItem(id)

    return (
        <>
            <div className="d-flex align-items-center gap-3 mb-5">
                <h2 className="fw-light me-4"> {item.name} </h2>
                <Button title='Atualizar' url={`/stock/${item.id}/update`} color='light' />
                <DeleteButton itemId={item.id} itemName={item.name} />
            </div>
            
            <div className="d-flex gap-5 mb-5">
                <span className="bg-dark py-3 px-5 rounded-3 fs-5 shadow"> Categoria: {item.category} </span>
                <span className="bg-dark py-3 px-5 rounded-3 fs-5 shadow"> Quantidade em estoque: {item.quantity} </span>
                <span className="bg-dark py-3 px-5 rounded-3 fs-5 shadow"> Preço: R$ {Number(item.price).toFixed(2).replace(".", ",")} </span>
            </div>
            
            <p className="fs-5 mb-5"> {item.description} </p>

            <div className="d-flex gap-5 fs-5">
                <span> Cadastrado em: {new Date(item.createdAt).toDateString()} </span>
                <span> Atualizado em: {new Date(item.updatedAt).toDateString()} </span>
            </div>
        </>
    )
}
