import './App.css';
import React from 'react';
import InputFecha from "./inputFecha";
import PlanillaAlumnos from "./planillaAlumnos";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputFecha></InputFecha>
        <PlanillaAlumnos></PlanillaAlumnos>
      </div>
    );
  };
};
export default App;
