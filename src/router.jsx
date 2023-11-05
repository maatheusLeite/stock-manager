import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout/RootLayout.jsx'
import Home from './pages/Home/Home.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        }]
    }
])


export default router