import React, { Component } from "react";

export class Weather extends Component {
  claculCelsius = (temp) => {
    return Math.floor(temp - 273.15);
  }
  render() {
    const {
      city,
      country,
      icon,
      description,
      temperature,
      temp_max,
      temp_min,
      isLoading,
      errors
    } = this.props.data;
    let iconurl = "http://openweathermap.org/img/w/" + icon + ".png";
    return (
      <div>
        {!isLoading ? (
          <div className='card__title'>
              <h1>
                {city}, {country}
              </h1>
            <div className="card__temp">
              <img src={iconurl} alt="Weather icon"/>
              <h2>{this.claculCelsius(temperature)}&deg;</h2>
              <span>{this.claculCelsius(temp_min)}&deg;</span>
              <span>{this.claculCelsius(temp_max)}&deg;</span>
            </div>
            <h2>{description}</h2>
          </div>
        ) : (
          <p class="loading">Please Enter City and Country...</p>
        )}
      </div>
    );
  }
}

export default Weather;
