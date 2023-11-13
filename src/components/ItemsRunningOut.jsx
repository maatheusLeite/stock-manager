import ItemRunningOut from "./ItemRunningOut";
import PropTypes from "prop-types";

ItemsRunningOut.propTypes = {
    itemsRunningOut: PropTypes.array
}

export default function ItemsRunningOut({ itemsRunningOut }) {
    return (
        <div className="col">
            <div className="row bg-dark shadow p-4">
                <span className="col-6 fw-bold"> Items Acabando </span>
                <span className="col fw-bold"> Qtd. </span>
                <span className="col fw-bold px-3"> Ações </span>
            </div>

            {
                itemsRunningOut.map((item) => (
                    <ItemRunningOut key={item.id} name={item.name} quantity={item.quantity} url={`/stock/${item.id}`} />)
                )
            }
        </div>
    )
}
