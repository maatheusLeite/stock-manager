import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout/RootLayout.jsx'
import Home from './pages/Home/Home.jsx'
import StockItems from './pages/StockItems/StockItems.jsx'
import AllItems from './pages/StockItems/AllItems.jsx'
import NewItem from './pages/StockItems/NewItem.jsx'
import ShowItem from './pages/StockItems/ShowItem.jsx'
import UpdateItem from './pages/StockItems/UpdateItem.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{ index: true, element: <Home /> },
            {
                path: 'stock',
                element: <StockItems />,
                children: [
                    { index: true, element: <AllItems /> },
                    { path: 'new', element: <NewItem /> },
                    { path: ':id', element: <ShowItem /> },
                    { path: ':id/update', element: <UpdateItem /> }
                ]
            }
        ]
    }
])


export default router