import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import './PersonaMoralForm.css';

const Handle = Slider.Handle;

const style = {
  width: 400,
  margin: 10
};

const marks = {
  6: '6',
  12: '12',
  18: '18',
  24: '24',
  30: '30',
  36: '36',
  42: '42',
  48: '48',
  54: '54',
  60: '60'
};

class PersonaMoralForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      middleName: '',
      lastName: '',
      birthDate: '',
      monthlyEarnings: '',
      loan: '',
      termInMonths: '6'
    };

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
  }

  onChangeFirstName = e => {
    var splitName = e.target.value.split(' ');
    this.setState({
      firstName: splitName[0],
      middleName: splitName[1],
      lastName: splitName[2]
    });
  };

  onChangeDate = e => {
    this.setState({
      birthDate: e.target.value
    });
  };

  onChangeMonthlyEarnings = e => {
    this.setState({
      monthlyEarnings: e.target.value
    });
  };

  onChangeLoan = e => {
    this.setState({
      loan: e.target.value
    });
  };

  onChangeTermInMonths = e => {
    this.setState({
      termInMonths: String(e.target.value)
    });
  };

  onSliderChange = sliderValues => {
    this.setState({
      termInMonths: sliderValues
    });
  };

  handleSubmit = e => {
    alert(this.state.birthDate);
    e.preventDefaults();
  };

  render() {
    return (
      <form className='personamoralform' onSubmit={this.handleSubmit}>
        <label for='personamoralform-name'>Nombre Completo:</label>
        <input
          type='text'
          id='personamoralform-name'
          onChange={this.onChangeFirstName}
        />

        <label for='personamoralform-date'>Fecha de naciemiento:</label>
        <input
          type='date'
          id='personafisicaform-date'
          onChange={this.onChangeDate}
        />

        <label for='personamoralform-ingresos'>Ingresos mensuales:</label>
        <div className='personamoral-ingresos-input'>
          <p className='personamoralform-signo'>$</p>
          <input
            type='number'
            id='personamoralform-ingresos'
            onChange={this.onChangeMonthlyEarnings}
          />
        </div>

        <label for='personamoral-prestamo'>Pedido de prestamo:</label>
        <div className='personamoral-ingresos-input'>
          <p className='personamoralform-signo'>$</p>
          <input
            type='number'
            id='personamoralform-prestamo'
            onChange={this.onChangeLoan}
          />
        </div>

        <p className='personamoralform-slider-label'>Quiero pagarlo en...</p>
        <Slider
          className='personamoralform-slider'
          min={6}
          max={60}
          step={6}
          style={style}
          marks={marks}
          onChange={this.onSliderChange}
        />

        <button type='submit'>SUBMIT</button>
      </form>
    );
  }
}

export default PersonaMoralForm;
