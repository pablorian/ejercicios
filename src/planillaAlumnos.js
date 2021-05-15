import React from 'react';
import InputFecha from "./inputFecha";

class PlanillaAlumnos extends React.Component {

  alumnos = [
    new Alumno('Pablo'),
    new Alumno('Gringo'),
    new Alumno('Roli')
  ]

  constructor(props) {
    super(props);
    this.state = {
      alumnos: this.alumnos.map((alumno) => <p>
        {alumno.nombre}
        <button onClick={() => this.setPresente(alumno)}>Presente</button>
        <button onClick={() => this.setAusente(alumno)}>Ausente</button>
      </p>)
    };
  }

  setPresente(alumno) {
    alumno.setPresencia(true);
  }

  setAusente(alumno) {
    alumno.setPresencia(false);
  }

  render() {
    return (
      <div>
        <h1>Alumnos</h1>
        <div>{this.state.alumnos}</div>
      </div>
    );
  };
}

export default PlanillaAlumnos


class Persona {

  nombre = "";

  constructor(_nombre) {
    this.nombre = _nombre;
  }

  comoMeLlamo() {
    console.log('mi nombre es', this.nombre)
  }
}

class Alumno extends Persona {

  asistencia = [];

  constructor(_nombre) {
    super(_nombre);
  }

  setPresencia(value) {

  }

}
