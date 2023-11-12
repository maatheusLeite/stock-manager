import PropTypes from 'prop-types'
import useStock from '../hooks/useStock.js'
import { useNavigate } from 'react-router-dom'

DeleteButton.propTypes = {
    itemId: PropTypes.number,
    itemName: PropTypes.string
}

export default function DeleteButton({ itemId, itemName }) {
    const { deleteItem } = useStock()
    const navigate = useNavigate()

    function handleDelete() {
        if (confirm(`Tem certeza que deseja excluir o item: ${itemName}?`)) {
            deleteItem(itemId)
            navigate("/stock") // Após executar a exclusão, o codigo redireciona o usuário para a pagina inicial
        }
    }

    return <button className='btn py-1 px-3 btn-danger' onClick={handleDelete}> Excluir </button>
}
