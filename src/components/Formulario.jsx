import React from "react";

function Formulario({ producto }) {
  return (
    <>
      <div className=" mb-4  flex items-end">
        <img
          className="border-input w-48 h-48 object-cover object-center"
          src={producto?.imagen}
          alt="Imagen de la Url"
        />
        <div className="ml-5">
          <label className="text-gray-800" htmlFor="imagen">
            Imagen:
          </label>
          <input
            id="imagen"
            type="text"
            className="border-input block w-96 mt-2   p-3 bg-gray-50"
            placeholder="Seleccionar archivo"
            name="imagen"
            defaultValue={producto?.imagen}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="nombre">
          Nombre:
        </label>
        <input
          id="nombre"
          type="text"
          className="border-input mt-2 block w-full p-3 bg-gray-50"
          placeholder="Nombre del producto"
          name="nombre"
          defaultValue={producto?.nombre}
        />
      </div>

      <div className="flex gap-5">
        <div className="mb-4 flex-grow">
          <label className="text-gray-800" htmlFor="precio">
            Precio:
          </label>
          <input
            id="precio"
            type="number"
            className="border-input mt-2 block w-full p-3 bg-gray-50"
            placeholder="$ 0.00"
            name="precio"
            defaultValue={producto?.precio}
          />
        </div>
        <div className="mb-4 flex-grow">
          <label className="text-gray-800" htmlFor="stock">
            Stock:
          </label>
          <input
            id="stock"
            type="number"
            className="border-input mt-2 block w-full p-3 bg-gray-50"
            placeholder="Stock del producto"
            name="stock"
            defaultValue={producto?.stock}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="text-gray-800" htmlFor="descripcion">
          Descripción:
        </label>
        <textarea
          as="textarea"
          id="descripcion"
          type="text"
          className="border-input mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
          placeholder="Descripcion del producto"
          name="descripcion"
          defaultValue={producto?.descripcion}
        />
      </div>
    </>
  );
}

export default Formulario;
