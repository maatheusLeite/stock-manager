import ButtonShow from "./Button";
import PropTypes from "prop-types"

RecentItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
}

export default function RecentItem({ title, url }) {
    return (
        <div className="row p-4 d-flex align-items-center onMouse">
            <span className="col-8"> {title} </span>
            <span className="col"> <ButtonShow title='Ver' url={url} color='light'/> </span>
        </div>
    )
}
