import { Form, redirect, useNavigate } from "react-router-dom";
import { eliminarProducto } from "../data/productos";

export async function action({ params }) {
  await eliminarProducto(params.productoId);
  return redirect("/");
}

function Productos({ producto }) {
  const navigate = useNavigate();
  const { id, imagen, nombre, precio, stock } = producto;

  return (
    <article className="bg-[#FFFFFF] rounded-lg overflow-hidden shadow-md p-4">
      <img
        className="w-48 h-48 object-cover object-center mx-auto"
        src={imagen}
        alt="Imagen"
      />
      <div className="mt-2">
        <h2 className="text-black text-xl font-semibold">{nombre}</h2>
        <h3 className="text-[#777777] text-xl mb-3 font-semibold">
          $ <span>{precio}</span>
        </h3>
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-[#202123] text-[#FFFFFF] w-[40%] py-2 rounded-md hover:bg-yellow-300 focus:outline-none focus:shadow-outline"
            onClick={() => navigate(`/productos/${id}/editar`)}
          >
            Editar
          </button>

          <Form
            method="post"
            action={`/productos/${id}/eliminar`}
            //confirmar si elimina o no
            onSubmit={(e) => {
              if (!confirm("¿Deseas eliminar este registro?")) {
                e.preventDefault();
              }
            }}
          >
            <button className="bg-[#F43B51] text-[#FFFFFF] w-[160%] py-2 rounded-md hover:bg-red-300 focus:outline-none focus:shadow-outline">
              Eliminar
            </button>
          </Form>
        </div>
      </div>
    </article>
  );
}

export default Productos;
