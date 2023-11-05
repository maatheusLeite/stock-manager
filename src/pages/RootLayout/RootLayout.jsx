import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <>
            <header>
                <h1 > React Stock </h1>
            </header>
            <Outlet />
        </>
    )
}
