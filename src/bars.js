let totalPopulation = 7777721563;

function Bar({ country }) {
  const width = (country.population / totalPopulation) * 100;

  return (
    <tr className=" w-full align-middle ">
      <td className=" w-1/12 ">{country.name.common}</td>
      <td className="relative text-left w-4/5 bg-yellow-100">
        <div
          className=" bg-blue-600 h-10  rounded-md "
          style={{ width: `${width}%` }}></div>
      </td>
      <td className=" w-1/5"> {country.population}</td>
    </tr>
  );
}

function Graph({ data }) {
  var sortedData = data.sort((a, b) => b.population - a.population);
  if (sortedData.length > 10) {
    sortedData = sortedData.slice(1, 10);
  }

  return (
    <table>
      <tbody className=" relative my-8p py-8 px-4  w-full">
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
