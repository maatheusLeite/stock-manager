import ButtonShow from "./Button";
import PropTypes from "prop-types"

ItemCard.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    qtd: PropTypes.number,
    category: PropTypes.string,
}

export default function ItemCard({ id, title, qtd, category }) {
    return (
        <div className="row p-4">
            <span className="col-4"> {id} </span>
            <span className="col-2"> {title} </span>
            <span className="col-1"> {`${qtd} unid.`} </span>
            <span className="col-2"> {category} </span>
            <div className="col-3">
                <span className="col"> <ButtonShow title='Ver' url={'url'} color='info' /> </span>
                <span className="col mx-3"> <ButtonShow title='Atualizar' url={'url'} color='light' /> </span>
                <span className="col"> <ButtonShow title='Excluir' url={'url'} color='danger' /> </span>
            </div>
        </div>
    )
}
