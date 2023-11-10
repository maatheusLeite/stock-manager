import Button from "./Button";
import PropTypes from "prop-types"

ItemCard.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    quantity: PropTypes.number,
    category: PropTypes.string,
    urlShow: PropTypes.string,
    urlUpdate: PropTypes.string
}

export default function ItemCard({ id, name, quantity, category, urlShow, urlUpdate }) {
    return (
        <div className="row p-4">
            <span className="col-4"> {id} </span>
            <span className="col-2"> {name} </span>
            <span className="col-1"> {`${quantity} unid.`} </span>
            <span className="col-2"> {category} </span>
            <div className="col-3">
                <span className="col"> <Button title='Ver' url={urlShow} color='info' /> </span>
                <span className="col mx-3"> <Button title='Atualizar' url={urlUpdate} color='light' /> </span>
                <span className="col"> <Button title='Excluir' url={'url'} color='danger' /> </span>
            </div>
        </div>
    )
}
