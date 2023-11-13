import ButtonShow from "./Button";
import PropTypes from "prop-types"

ItemRunningOut.propTypes = {
    name: PropTypes.string,
    quantity: PropTypes.number,
    url: PropTypes.string
}

export default function ItemRunningOut({ name, quantity, url }) {
    return (
        <div className="row p-4 d-flex align-items-center onMouse">
            <span className="col-8"> {name} </span>
            <span className="col"> {quantity} </span>
            <span className="col"> <ButtonShow title='Ver' url={url} color='light'/> </span>
        </div>
    )
}
