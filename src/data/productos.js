export async function obtenerProductos() {
  const respuesta = await fetch(import.meta.env.VITE_API_URL);
  const resultado = await respuesta.json();
  return resultado;
}

//editar
export async function obtenerProducto(id) {
  const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
  const resultado = await respuesta.json();
  return resultado;
}

export async function agregarProducto(datos) {
  try {
    const respuesta = await fetch(import.meta.env.VITE_API_URL, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(datos);
  }
}

//editar
export async function actualizarProducto(id, datos) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await respuesta.json();
  } catch (error) {
    console.log(datos);
  }
}

//eliminar el producto
export async function eliminarProducto(id) {
  try {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
      method: "DELETE",
    });
    await respuesta.json();
  } catch (error) {
    console.log(datos);
  }

  console.log("elmimnandoooooo");
  console.log(id);
}
