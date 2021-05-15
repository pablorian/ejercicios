import React from 'react';
import moment from 'moment';

class InputFecha extends React.Component {

  fechaMoment = moment()

  constructor(props) {
    super(props);
    this.state = {
      fecha: this.fechaMoment.format('ll'),
    };
    this.props.onSetFecha(this.fechaMoment);
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
    this.props.onSetFecha(this.fechaMoment);
  }

  irAdelante() {
    this.fechaMoment = this.fechaMoment.add(1, 'days');
    this.setState(state => ({
      fecha: this.fechaMoment.format('ll')
    }));
    this.props.onSetFecha(this.fechaMoment);
  }
};

export default InputFecha;
