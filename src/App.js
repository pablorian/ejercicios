import './App.css';
import React from 'react';
import InputFecha from "./inputFecha";
import PlanillaAlumnos from "./planillaAlumnos";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      fechaGlobal: ''
    };
  }

  updateFecha(fecha) {
    this.setState({fechaGlobal: fecha})
  }

  render() {
    return (
      <div className="App">
        <InputFecha onSetFecha={(fecha) => this.updateFecha(fecha)}></InputFecha>
        <PlanillaAlumnos fecha={this.state.fechaGlobal}></PlanillaAlumnos>
      </div>
    );
  };
};
export default App;
