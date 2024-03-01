import axios from "axios";
import React, { useState, useEffect, useDeferredValue } from "react";
import Graph from "./bars";

function Data({ text, data }) {
  return (
    <div className=" text-2xl py-2 sm:text-lg">
      <strong>{text}: </strong>
      <span>{data}</span>
    </div>
  );
}

function Country({
  country: {
    name: { common },
    flags: { svg, alt },
    capital,
    population,
    area,
    region,
  },
}) {
  return (
    <div className=" lg:w-96 md:w-80 sm:w-60 text-gray-800 lg:p-9 md:p-6 p-4 bg-white relative rounded-3xl drop-shadow-md shadow-zinc-700 hover:drop-shadow-2xl  hover:shadow-black   transition-all duration-0  hover:scale-105  ">
      <h1 className="h text-4xl sm:text-2xl text-center font-bold pb-4 text-centet overflow-clip ">
        {common}
      </h1>
      <div className=" m-auto  mb-5  w-4/5 hover:w-10/12 transition-all duration-75 ease-in-out ">
        <img className="mx-0 shadow-slate-500 shadow-md " src={svg} alt={alt} />
      </div>
      <Data text={"Capital"} data={capital} />
      <Data text={"Population"} data={population} />
      <Data text={"Area"} data={area} />
      <Data text={"Continent"} data={region} />
    </div>
  );
}

function Countries({ countries }) {
  const all_countries = countries.map((country) => (
    <Country country={country} />
  ));

  return (
    <div className="  bg-orange-200 py-20 w-full mx-auto justify-center flex flex-wrap  gap-6  px-10 lg:px-0 md:px-0 xl:px-0 ">
      {all_countries}
    </div>
  );
}

function App() {
  const [Data, setData] = useState([]);
  const [Name, setName] = useState("");
  const differedName = useDeferredValue(Name);
  const handleChange = (e) => setName(e.target.value);

  const filterData = () => {
    const filteredCountries = Data.filter((country) =>
      country.name.common.toLowerCase().includes(differedName.toLowerCase())
    );

    const sorted_data = filteredCountries.sort(
      (a, b) => b.name.common.length - a.name.common.length
      // a.name.common.localeCompare(b.name.common)
    );
    return sorted_data;
  };

  const getData = async () => {
    const url = "https://restcountries.com/v3.1/all";
    try {
      const response = await axios.get(url);
      const countries_data = await response.data;
      setData(countries_data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [differedName]);
  return (
    <div className="mx-auto relative   sm:w-full lg:w-10/12 md:w-11/12 xl:w-10/12">
      <header className=" bg-orange-200 w-full px-4 py-20 tetx-center ">
        <h1 className=" sm:text-4xl text-4xl  md:text-5xl lg:text-7xl font-bold  text-center xl:text-7xl ">
          World Countries
        </h1>
        <div className="text-center sm:text-xl md:text-3xl">
          Currently, we have data about {Data.length} countries.
          <br />
        </div>
      </header>
      <section className=" mx-auto my-10 border-gray-500 border-2 px-10 py-3 lg:w-96 md:w-80 w-10/12 rounded-full">
        <input
          className=" w-full focus:border-transparent focus:outline-none text-lg"
          type="text"
          value={Name}
          placeholder="search country"
          onChange={handleChange}
        />
      </section>
      <Graph data={filterData()} />
      <Countries countries={filterData()} />
    </div>
  );
}

export default App;
