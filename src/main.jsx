import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Index, { loader as productosLoader } from "./pages/Index";
import Facturas from "./pages/Facturas";
import Usuarios from "./pages/Usuarios";
import AgregarProducto, {
  action as agregarProductoAction,
} from "./pages/AgregarProducto";
import ErrorPage from "./components/ErrorPage";
import EditarProducto, {
  loader as editarProductoLoader,
  action as editarProductoAction,
} from "./pages/EditarProducto";
import { action as eliminarProductoAction } from "./components/Productos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
            loader: productosLoader,
          },
          {
            path: "/productos/agregar",
            element: <AgregarProducto />,
            action: agregarProductoAction,
          },
          {
            path: "/productos/:productoId/editar",
            element: <EditarProducto />,
            loader: editarProductoLoader,
            action: editarProductoAction,
          },
          {
            path: "/productos/:productoId/eliminar",
            action: eliminarProductoAction,
          },
          {
            path: "/facturas",
            element: <Facturas />,
          },
          {
            path: "/usuarios",
            element: <Usuarios />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
