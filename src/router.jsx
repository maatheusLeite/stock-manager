import { createBrowserRouter } from 'react-router-dom'
import RootLayout from './pages/RootLayout/RootLayout.jsx'
import Home from './pages/Home/Home.jsx'
import StockItems from './pages/StockItems/StockItems.jsx'
import AllItems from './pages/StockItems/AllItems.jsx'
import NewItem from './pages/StockItems/NewItem.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        }, {
            path: 'stock',
            element: <StockItems />,
            children: [{
                index: true,
                element: <AllItems />
            }, {
                path: 'new',
                element: <NewItem />
            }]
        }
        ]
    }
])


export default router