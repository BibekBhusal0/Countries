import "./App.css";
import React, { Component } from "react";
import axios from "axios";

function Country({
  country: {
    name: { common },
    capital,
    flags: { svg, alt },
    area,
    population,
    region,
  },
}) {
  return (
    <div className="country-elem">
      <h2 className="country-name">{common}</h2>
      <img src={svg} alt={alt} />
      <p className="country-detil">
        <strong> Capital: </strong> {capital}
      </p>
      <p className="country-detil">
        <strong> Area: </strong> {area} m²
      </p>
      <p className="country-detil">
        <strong> Population: </strong> {population}
      </p>
      <p className="country-detil">
        <strong> Continent: </strong> {region}
      </p>
    </div>
  );
}

function Countries({ countries }) {
  const formatedCountries = countries.map((country) => (
    <Country key={country.name.common} country={country} />
  ));

  return <div className="allCountries ">{formatedCountries}</div>;
}

class App extends Component {
  getData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await axios.get(url);
      const data = await response.data;
      this.setState({ data: data });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
    console.log("fetching data");
  }

  state = { data: [] };
  render() {
    return (
      <div className="App">
        <h1>
          List of all countries of the world including their flag, capital,
          Area, Continent, Population .
        </h1>
        <Countries countries={this.state.data} />
      </div>
    );
  }
}

export default App;
