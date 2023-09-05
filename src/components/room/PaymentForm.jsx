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
  };

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="d-flex flex-lg-row flex-column align-items-center ">
        <Cards className="col-lg-6 col-12"
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form className="d-flex flex-column col-lg-6 col-12 ">
          <input
            className="my-2"
            type="tel"
            name="number"
            placeholder="Número de tarjeta"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="my-2"
            type="text"
            name="name"
            placeholder="Titular"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="my-2"
            type="tel"
            name="expiry"
            placeholder="MM/YY Vencimiento"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            className="my-2"
            type="tel"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    );
  }
}
