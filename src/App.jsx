import "./App.css";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import TermsConditions from "./pages/TermsConditions";
import Support from "./pages/Support";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/product/:productId", element: <Product /> },
    { path: "/cart", element: <Cart /> },
    { path: "/checkout", element: <Checkout /> },
    { path:"/about",element:<About/>},
    { path:"/terms&conditions",element:<TermsConditions/>},
    { path:"/support",element:<Support/>}
  ]);

  return <RouterProvider router={router} />;
}

export default App;
