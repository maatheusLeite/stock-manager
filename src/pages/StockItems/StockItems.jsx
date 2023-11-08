import { Outlet } from "react-router-dom";

export default function StockItems() {
    return (
        <div className="container-fluid px-5">
            <h2 className="fw-light mb-5"> Stock Items </h2>

            <Outlet />
        </div>
    )
}
