import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/product/:productId", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <Checkout /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
