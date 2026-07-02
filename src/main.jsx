import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App.jsx";
import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import Cart from "./pages/cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
