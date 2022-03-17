import { useQuery } from "react-query";
import "./App.css";

function App() {
  const getNames = async () => {
    const data = await fetch("http://localhost:5001/name");

    const res = await data.json();
    console.log(res);
    return res;
  };
  const { data, status } = useQuery("namess", getNames);

  if (status == "loading") return <h1>Loading</h1>;
  if (status == "error") return <h1>Error</h1>;
  return (
    <div className="App">
      {data.map((val) => (
        <h3 key={val}>{val}</h3>
      ))}
    </div>
  );
}

export default App;
