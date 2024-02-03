import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="md:flex md:min-h-screen">
      <aside className="md:w-[22%] bg-[#202123] text-[#E7E8EC] p-4 ">
        <div className="text-center">
          <h2 className="text-4xl  mt-8">
            Hola, <span className="font-semibold">Tom</span>
          </h2>
          <img
            className="rounded-full w-60 h-60 object-cover mx-auto mt-4"
            src="https://img.freepik.com/vector-premium/perfil-hombre-dibujos-animados_18591-58482.jpg"
            alt="img-perfil"
          />
          <p className="text-[#66C279] mt-2 text-2xl">@Tom_Pérez1208</p>
        </div>

        <h2 className="text-2xl font-semibold mt-10 mb-5">Menú Principal</h2>

        <nav className="">
          <ul className="space-y-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  `${isActive ? "b-nav-active" : "bg-transparent"} 
                  ${isPending ? "" : "b-nav-hover"} b-nav`
                }
              >
                Productos
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/facturas"
                className={({ isActive, isPending }) =>
                  `${isActive ? "b-nav-active" : "bg-transparent"} 
                  ${isPending ? "" : "b-nav-hover"} b-nav`
                }
              >
                Facturas
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/usuarios"
                className={({ isActive, isPending }) =>
                  `${isActive ? "b-nav-active" : "bg-transparent"} 
                  ${isPending ? "" : "b-nav-hover"} b-nav`
                }
              >
                Usuarios
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="md:w-[78%] md:h-screen overflow-scroll px-16 py-8 bg-[#EFEFF5]">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;

// #202123 negra letra
// #E7E8EC blanco letra
// #66C279 verde letra

// #86EB9A BOTON verde
