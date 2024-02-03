import Formulario from "../components/Formulario";
import { Form, redirect, useActionData, useNavigate } from "react-router-dom";
import Error from "../components/Error";
import { agregarProducto } from "../data/productos";

export async function action({ request }) {
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

  await agregarProducto(datos);

  return redirect("/");
}

function AgregarProducto() {
  const errores = useActionData();
  const navigate = useNavigate();

  return (
    <>
      <h2 className="border-l-4 border-[#5AA469] font-semibold text-2xl leading-loose pl-2">
        Agregar producto
      </h2>

      <div className="mt-10 ">
        {errores?.length &&
          errores.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="POST">
          <Formulario />

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
              value="Agregar Producto"
            />
          </div>
        </Form>
      </div>
    </>
  );
}

export default AgregarProducto;
