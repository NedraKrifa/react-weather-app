import React, { Component } from 'react'
import axios from 'axios';
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'

const api = {
  key : "3a428a6125f8b5ef6fc42d1a3db8b92f",
  base : "https://api.openweathermap.org/data/2.5/"
}


export class App extends Component {
  state={
    city: "",
    country: "",
    icon: "",
    description: "",
    temperature: "",
    temp_max: "",
    temp_min: "",
    isLoading : true
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const response = await axios.get(`${api.base}weather?q=${city},${country}&appid=${api.key}`);
    try{
      this.setState({
        city: response.data.name,
        country: response.data.sys.country,
        icon: response.data.weather[0].icon,
        description: response.data.weather[0].description,
        temperature: response.data.main.temp,
        temp_max: response.data.main.temp_max,
        temp_min: response.data.main.temp_min,
        isLoading : false
      });
    }catch(error){
      this.setState({isLoading : false});
    }
    document.getElementsByClassName('input-weather')[0].value = '';
    document.getElementsByClassName('input-weather')[1].value = '';
  }
  render() {
    return (
      <div className='App'>
        <Form loadWeather={this.getWeather}/>
        <Weather data={this.state}/>
      </div>
    )
  }
}

export default App

