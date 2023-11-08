import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

Button.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    color: PropTypes.string
}

export default function Button({ title, url, color }) {
    return <Link to={url} className={`btn py-1 px-3 btn-${color}`}> {title} </Link>
}
