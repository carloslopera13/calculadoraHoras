import React from 'react'

export default function ListadoTecnico(props) {
    const {infoServicio} = props
    return (
        <table className="table table-striped">
            <thead>
            <tr>
              <th scope="col">Id Tecnico</th>
              <th scope="col">Id Servicio</th>
              <th scope="col">Fecha y Hora Inicio</th>
              <th scope="col">Fecha y Hora Fin</th>
            </tr>
          </thead>
            {
              infoServicio.map((info, index) =>
              <tbody>
               <tr>
                <td>{info.idTecnico}</td>
                 <td>{info.idServicio}</td>
                 <td>{info.fechaInicio}</td>
                 <td>{info.fechaFin}</td>
                 </tr>
               </tbody>
              )
            }
        </table>
    )
}
