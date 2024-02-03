import { useLoaderData, useNavigate } from "react-router-dom";
import Productos from "../components/Productos";
import { obtenerProductos } from "../data/productos";

export function loader() {
  const productos = obtenerProductos();
  return productos;
}

function Index() {
  const productos = useLoaderData();
  const navigate = useNavigate();

  return (
    <>
      <div className="flex  items-center gap-4 mb-12">
        <form className="w-[40%]">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:shadow-lg"
            id="q"
            name="q"
            type="search"
            placeholder="Search"
          />
        </form>

        <form>
          <button
            className="bg-[#86EB9A] hover:bg-green-400 text-dark font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            // type="submit"
            onClick={() => navigate("/productos/agregar")}
          >
            Agregar
          </button>
        </form>
      </div>

      {productos.length ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {productos.map((producto) => (
            <Productos producto={producto} key={producto.id} />
          ))}
        </div>
      ) : (
        <h2>No hay productos todavía</h2>
      )}
    </>
  );
}

export default Index;
