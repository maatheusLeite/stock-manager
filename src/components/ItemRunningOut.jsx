import ButtonShow from "./ButtonShow";
import PropTypes from "prop-types"

ItemRunningOut.propTypes = {
    title: PropTypes.string,
    qtd: PropTypes.number,
    url: PropTypes.string
}

export default function ItemRunningOut({ title, qtd, url }) {
    return (
        <div className="row p-4 d-flex align-items-center">
            <span className="col-8"> {title} </span>
            <span className="col"> {qtd} </span>
            <span className="col"> <ButtonShow url={url}/> </span>
        </div>
    )
}
