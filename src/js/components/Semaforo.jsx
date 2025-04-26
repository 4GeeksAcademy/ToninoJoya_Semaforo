import React from "react";
import { useState } from "react";




export const Semaforo = () => {

    const [colorSeleccionado, setColor] = useState(null)

    const coloresSemaforo = [ "rojo" , "amarillo" , "verde"]


    return (
        <div className="container d-flex justify-content-center">
            <div className="row">
                <div className="col-lg-12">
                    <div className="container d-flex justify-content-center">
                        <div className="bg-dark palo">
                        </div>
                    </div>
                    <div className=" bg-dark semaforo rounded-4 mt-0 d-flex flex-column justify-content-center align-items-center">
                        {
                            coloresSemaforo.map((color, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={`mt-2 rounded-circle ${color} ${colorSeleccionado === color ? "glow" : ""}`}
                                        onClick={() => setColor(color)}>

                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    );
};









// return (

//     <>
//         <div className="container d-flex justify-content-center">
//             <div className="row">
//                 <div className="col-lg-12">
//                     <div className="container d-flex justify-content-center">
//                         <div className="bg-dark palo">
//                         </div>
//                     </div>

//                     <div className=" bg-dark semaforo rounded-4 mt-0 d-flex flex-column justify-content-center align-items-center">
//                         <div
//                             className={`rojo btn btn-danger mt-2 rounded-circle ${color === "rojo" ? "glow" : ""}`}
//                             onClick={() => setColor("rojo")}>

//                         </div>
//                         <div className={`amarillo colorAmarillo mt-2 rounded-circle ${color === "amarillo" ? "glow" : ""}`}
//                             onClick={() => setColor("amarillo")}>

//                         </div>
//                         <div className={`verde btn btn-success mt-2 mb-2 rounded-circle ${color === "verde" ? "glow" : ""}`}
//                             onClick={() => setColor("verde")}>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div >
//     </>
// );
