import { RouterProvider } from "react-router-dom";
import router from "./router";
import './App.scss'
import { StockContextProvider } from "./contexts/StockContext";

export default function App() {
  return (
    <StockContextProvider>
      <RouterProvider router={router} />
    </StockContextProvider>
  )
}
