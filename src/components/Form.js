import React, { Component } from "react";

export class Form extends Component {
  render() {
    return (
      <form className="form-weather" onSubmit={(e)=>this.props.loadWeather(e)}>
        <input
          type="text"
          name="city"
          placeholder="City"
          className="input-weather"
          autoComplete="off"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          className="input-weather"
          autoComplete="off"
        />
        <input
          type="submit"
          value="Get Weather"
          className="btn-weather"
        />
      </form>
    );
  }
}

export default Form;
