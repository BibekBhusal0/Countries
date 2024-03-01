function Graph(data) {
  const tempData = [...data];
  const usefulData = tempData.map((item) => {
    console.log(item);
    return { name: " common", population: " population" };
  });
  console.log(usefulData);
  //   console.log(data);

  return (
    <div>
      <div>
        <h1>hello</h1>
      </div>
    </div>
  );
}

export default Graph;
