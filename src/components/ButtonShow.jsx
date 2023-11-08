import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

ButtonShow.propTypes = {
    url: PropTypes.string
}

export default function ButtonShow({ url }) {
    return <Link to={url} className="btn btn-light py-1 px-3"> Ver </Link>
}
