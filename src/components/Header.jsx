import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className="py-3 px-5 mb-2 d-flex justify-content-between">
            <h1 className="fs-5"> REACT STOCK </h1>
            <nav>
                <Link to='/' className="mx-4"> Início </Link>
                <Link to='/items'> Items </Link>
            </nav>
        </header>
    )
}
