import RecentItem from "./RecentItem";
import PropTypes from "prop-types";

RecentItems.propTypes = {
    recentItems: PropTypes.array
}

export default function RecentItems({ recentItems }) {
    return (
        <div className="col">
            <div className="row bg-dark shadow p-4">
                <span className="col-8 fw-bold"> Items Recentes </span>
                <span className="col fw-bold px-3"> Ações </span>
            </div>
            
            {
                recentItems.map((item) => <RecentItem key={item.id} title={item.name} url={`/stock/${item.id}`} />)  
            }
        </div>
    )
}
