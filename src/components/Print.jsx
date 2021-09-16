// import React from "react";
// import { useState } from "react";
// import swal from "sweetalert";

// const Print = (props) => {
//     const listadoFinal = props.onListado;

// return (
//     <div
//       id="card"
//       className="card mb-3 w-25 p-3 position-ralative m-4"
//       key={listadoFinal.id}
//     >
//       <h3 className="card-header">Id: {listadoFinal.id}</h3>
//       <div className="card-body">
//         <h4 className="badge bg-secondary">
//           Artículo: {listadoFinal.Articulo}
//         </h4>
//         <p>Referencia: {listadoFinal.Referencia}</p>
//         <div className="fotos">
//           <img
//             className="w-50 p-3"
//             src={`http://localhost:1337${listadoFinal.Foto[0].url}`}
//             alt={listadoFinal.title}
//           />
//         </div>
//         <span>
//           <em>Precio: {listadoFinal.Precio} €</em>
//         </span>
//       </div>
//       <div>
//         <button
//           className="btn-delete btn btn-outline-secondary"
//           onClick={borrarTienda}
//         >
//           <i class="fa fa-trash"></i>
//         </button>
//         <button
//           className="btn-delete btn btn-outline-secondary"
//           onClick={abrirModificarFuncion}
//         >
//           <i class="fa fa-edit"></i>
//         </button>
//       </div>
//       <div className="container">
//         <div>
//           {error ? (
//             <h3 className="error-campos">Debe completar todos los campos</h3>
//           ) : null}
//           {abrirModificar ? (
//             <div>
//               <h1>Modificar Artículo</h1>
//               <form
//                 className=""
//                 onSubmit={gestorSubmit}
//                 className="formulario"
//                 action="formulario"
//               >
//                 <input
//                   onChange={gestorModificaArticulo}
//                   className=""
//                   type="text"
//                   name="articulo"
//                   id="articulo"
//                   placeholder="Artículo"
//                   value={modificaArticulo}
//                 />
//                 <input
//                   onChange={gestorModificaReferencia}
//                   className=""
//                   type="text"
//                   name="referencia"
//                   id="referencia"
//                   placeholder="Referencia"
//                   value={modificaReferencia}
//                 />
//                 <input
//                   onChange={gestorModificaPrecio}
//                   className=""
//                   type="number"
//                   name="precio"
//                   id="precio"
//                   placeholder="Precio"
//                   value={modificaPrecio}
//                 />
//                 <textarea
//                   name="informacion"
//                   id="informacion"
//                   value={modificaInformacion}
//                   onChange={gestorModificaInformacion}
//                   cols="30"
//                   rows="5"
//                 ></textarea>
//                 <button id="btn-modificar" className="btn" type="submit">
//                   Modificar
//                 </button>
//               </form>
//             </div>
//           ) : null}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Print;
