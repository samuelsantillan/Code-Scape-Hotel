import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "./ReservationForm.css"

export default class PaymentForm extends React.Component {
  state = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",

    cvcTouched: false,
    expiryTouched: false,
    nameTouched: false,
    numberTouched: false,
  };

  validateDate = (expiry) => {
    const datePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!datePattern.test(expiry)) {
      return false;
    }
    const [month, year] = expiry.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const numericMonth = parseInt(month, 10);
    const numericYear = parseInt(year, 10);
    if (numericMonth < 1 || numericMonth > 12) {
      return false;
    }
    if (numericYear < currentYear) {
      return false;
    }
    return true;
  }



  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [`${name}Touched`]: true });
    this.setState({ [name]: value });

    

    if (name === "number") {
      this.setState({ numberValid: /^[0-9]{13,19}$/.test(value) });
    } else if (name === "name") {
      this.setState({ nameValid: /^[A-Za-z\s]{5,40}$/.test(value) });
    } else if (name === "expiry") {
      this.setState({ expiryValid: this.validateDate(value) });
    } else if (name === "cvc") {
      this.setState({ cvcValid: /^[0-9]{3,3}$/.test(value) });
    }


  };

  render() {
    return (
      <div className="d-flex flex-lg-row flex-column align-items-center ">
        <Cards className="col-lg-6 col-12 my-5 "
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="d-flex flex-column col-lg-6 col-12 my-3">
          <label className="form-label" >Número de tarjeta <span className="required">* </span></label>
          <input
            className={`inputCheckout ${!this.state.numberValid ? "is-invalid" : ""}`}
            type="tel"
            name="number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            minLength="13"
            maxLength="19"
            title="Por favor, introduzca un número de tarjeta válido."
            required
          />
          {!this.state.numberValid && this.state.numberTouched && (
            <div className="invalid-feedback">
              Por favor, introduzca un número de tarjeta válido.
            </div>
          )}
          <label className="form-label mt-3" >Nombre del titular <span className="required">* </span></label>
          <input
            className={`inputCheckout ${!this.state.nameValid ? "is-invalid" : ""}`}
            type="text"
            name="name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            minLength="5"
            maxLength="40"
            title="Por favor, introduzca un nombre válido."
            required
          />
          {!this.state.nameValid && this.state.nameTouched && (
            <div className="invalid-feedback">
              Por favor, introduzca un nombre válido.
            </div>
          )}
          <label className="form-label mt-3" >Fecha de caducidad <span className="required">* </span></label>
          <input
            className={`inputCheckout ${!this.state.expiryValid ? "is-invalid" : ""}`}
            type="tel"
            name="expiry"
            placeholder="MM/AA "
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            minLength="5"
            maxLength="5"
            title="Por favor, introduzca una fecha válida."
            required
          />
          {!this.state.expiryValid && this.state.expiryTouched && (
            <div className="invalid-feedback">
              Por favor, introduzca una fecha válida.
            </div>
          )}
          <label className="form-label mt-3" >Código de seguridad <span className="required">* </span></label>
          <input
            className={`inputCheckout ${!this.state.cvcValid ? "is-invalid" : ""}`}
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
            minLength="3"
            maxLength="3"
            title="Por favor, introduzca un código de seguridad válido."
            required
          />
          {!this.state.cvcValid && this.state.cvcTouched && (
            <div className="invalid-feedback">
              Por favor, introduzca un código de seguridad válido.
            </div>
          )}
        </form>
      </div>
    );
  }
}
