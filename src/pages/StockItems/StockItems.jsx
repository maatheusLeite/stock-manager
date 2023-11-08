import { Link, Outlet } from "react-router-dom";

export default function StockItems() {
    return (
        <div className="container-fluid px-5">
            <h2 className="fw-light mb-5"> Stock Items </h2>

            <div className="border-bottom border-light mb-5 py-3">
                <Link to='' className="border-bottom border-3 border-light p-3"> Todos os items </Link>
                <Link to='new' className="mx-5 p-3"> Novo item </Link>
            </div>

            <Outlet />
        </div>
    )
}
