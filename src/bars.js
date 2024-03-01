let totalPopulation = 7777721563;

function Bar({ country }) {
  const width = (country.population / totalPopulation) * 100;

  return (
    <tr className=" w-full ">
      <td className=" w-1/12 text-lg py-2 ">{country.name.common}</td>
      <td className="relative text-left  py-2  w-4/5">
        <div
          className=" bg-blue-600 h-10 rounded-md "
          style={{ width: `${width}%` }}></div>
      </td>
      <td className=" w-1/5 text-lg pl-1 py-2">
        {country.population.toLocaleString()}
      </td>
    </tr>
  );
}

function Graph({ data }) {
  var sortedData = data.sort((a, b) => b.population - a.population);
  if (sortedData.length > 10) {
    sortedData = sortedData.slice(1, 10);
  }

  return (
    <table className="my-20">
      <tbody className=" relative  px-4  w-full">
        <Bar
          country={{ name: { common: "World " }, population: totalPopulation }}
        />
        {sortedData.map((country) => (
          <Bar country={country} key={country.name.common} />
        ))}
      </tbody>
    </table>
  );
}

export default Graph;
