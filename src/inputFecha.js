import React from 'react';
import moment from 'moment';

class InputFecha extends React.Component {

  fechaMoment = moment()

  constructor(props) {
    super(props);
    this.state = {
      fecha: this.fechaMoment.format('ll'),
    };
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.irAtras()}> anterior </button>
        <h1>fecha: {this.state.fecha}</h1>
        <button onClick={() => this.irAdelante()}> proximo </button>
      </div>
    )
  };

  irAtras() {
    this.fechaMoment = this.fechaMoment.subtract(1, 'days');
    this.setState(state => ({
      fecha: this.fechaMoment.format('ll')
    }));
  }

  irAdelante() {
    this.fechaMoment = this.fechaMoment.add(1, 'days');
    this.setState(state => ({
      fecha: this.fechaMoment.format('ll')
    }));
  }
};

export default InputFecha;

// class Persona {
//
//   nombre = "";
//   asistencia = [];
//
//   constructor(_nombre) {
//     this.nombre = _nombre;
//   }
//
//   comoMeLlamo() {
//     console.log('mi nombre es', this.nombre)
//   }
// }
//
// class Profesor extends Persona {
//
//   autoridad = "profesor"
//
//   constructor(_nombre) {
//     super(_nombre);
//   }
//
//   comoMeLlamo() {
//     super.comoMeLlamo();
//     console.log("soy Alumno");
//   }
// }
//
// class Alumno extends Persona {
//
//   constructor(_nombre) {
//     super(_nombre);
//   }
//
//   comoMeLlamo() {
//     super.comoMeLlamo();
//     console.log("soy Alumno");
//   }
//
// }
// const persona1 = new Profesor('Pablo')
// persona1.comoMeLlamo()
// const persona2 = new Alumno('Gringo')
// persona2.comoMeLlamo()
