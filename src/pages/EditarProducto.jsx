import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { actualizarProducto, obtenerProducto } from "../data/productos";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function loader({ params }) {
  const producto = await obtenerProducto(params.productoId);
  if (Object.values(producto).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "El producto no fue encontrado",
    });
  }
  return producto;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  //Validacion
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios");
  }

  // Retornar datos si hay errores
  if (Object.keys(errores).length) {
    return errores;
  }

  //Actuazar el producto
  await actualizarProducto(params.productoId, datos);
  return redirect("/");
}

function EditarProducto() {
  const navigate = useNavigate();
  const producto = useLoaderData();
  const errores = useActionData();

  return (
    <>
      <h2 className="border-l-4 border-[#5AA469] font-semibold text-2xl leading-loose pl-2">
        Editar producto
      </h2>

      <div className="mt-10 ">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST">
          <Formulario producto={producto} />

          <div className="flex gap-5 mt-10 justify-center">
            {/* <input
              type="submit"
              className="bg-[#323338] text-white p-3 w-[20%]"
              value="Cancelar"
            /> */}
            <button
              type="button"
              className="bg-[#323338] text-white p-3 w-[20%]"
              onClick={() => navigate(-1)}
            >
              Cancelar
            </button>

            <input
              type="submit"
              className="bg-[#5AA469] text-white p-3 w-[50%]"
              value="Guardar Cambios"
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default EditarProducto;
