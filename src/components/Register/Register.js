import React, { Component } from 'react'
import axios from 'axios';
import ListadoTecnico from '../ListadoTecnico/ListadoTecnico'


export default class Registro extends Component {
    state={
        idTecnico:"",
        idServicio:"",
        fechaInicio:"",
        fechaFin:"",
        titulo:"Calculadora Horas",
        infoServicio:[],
        tecnico:[]
    }

    componentDidMount() {
      axios.get('http://localhost:8085/api/reportes').then(res => {
          console.log(res);
          this.setState({infoServicio: res.data})
      })
  }

      save = () => {
        // console.log(this.state.infoServicio)
        const prueba = {
            idTecnico : this.state.idTecnico,
            idServico : this.state.idServicio,
            fechaInicio : this.state.fechaInicio,
            fechaFin : this.state.fechaFin
        }
        console.log(prueba)
        axios.post('http://localhost:8085/api/guardar', prueba )
        .then(res => {console.log(res.data)})
        this.setState({
          idTecnico:'',
          idServicio:'',
          fechaInicio:'',
          fechaFin:''
        },alert("El ténico fue ingresado correctamente"))

      }


    handleChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value

        this.setState({
            ...this.state, [name]: value
        })
    }

    handleChangeFechaFinal = (e) => {
        e.preventDefault()
        const name = e.target.name
        const value = e.target.value

        this.compararFecha(value)
        this.setState({
            ...this.state, [name]: value
        })
    }

    compararFecha = (value) => {
        if (value > this.state.fechaInicio)
        {
            console.log('La Fecha final es mayor que la fecha inicial')
        } else {
            alert('La Fecha Inicial es mayor que la fecha final, vuelvelo a intentar')
        }
     }

    onClick = (e) => {
        e.preventDefault()

        this.setState({
            infoServicio:[...this.state.infoServicio,{
            idTecnico: this.state.idTecnico,
            idServicio: this.state.idServicio,
            fechaInicio: this.state.fechaInicio,
            fechaFin: this.state.fechaFin
            }],
        },this.save())
     }

    render() {
        const {idTecnico, idServicio, fechaInicio, fechaFin, infoServicio}= this.state
        return (
           <form onSubmit={this.onClick}>
              <div className="form-row">

                <div className="form-group col-sm-6">
                  <label>Identificación técnico</label>
                  <input
                  name="idTecnico"
                  value={idTecnico}
                  type="text"
                  className="form-control"
                  onChange={this.handleChange}
                  placeholder="Identificación técnico"
                  required
                  />
                </div>

                <div className="form-group col-sm-6">
                  <label>Identificación Servicio</label>
                  <input
                   name="idServicio"
                   value={idServicio}
                   type="text"
                   required
                   className="form-control"
                   placeholder="Identificación Servicio"
                   onChange={this.handleChange}
                  />
                </div>

                <div className="form-group col-sm-12">
                 <label>Fecha de Inicio Servicio</label>
                 <input
                   name="fechaInicio"
                   value={fechaInicio}
                   type="datetime-local"
                   className="form-control"
                   format="YYYY-MM-AA"
                   placeholder="Fecha de Inicio Servicio"
                   onChange={this.handleChange}
                   required
                 />
                </div>

                <div className="form-group col-sm-12">
                 <label>Fecha de Fin Servicio</label>
                 <input
                   name="fechaFin"
                   value={fechaFin}
                   type="datetime-local"
                   className="form-control"
                   format="YYYY-MM-AA"
                   placeholder="Fecha de Inicio Servicio"
                   onChange={this.handleChangeFechaFinal}
                   required
                 />
                </div>

              </div>
              <hr className="mb-1" />

              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-block bg-blue text-white lh-100">Guardar</button>
              </div>

              <ListadoTecnico infoServicio={infoServicio}/>
            </form>
        )
    }
}
