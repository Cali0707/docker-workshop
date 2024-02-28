import { useEffect, useState } from "react";
import "./App.css";

const baseUrl = process.env.REACT_APP_BACKEND_URL;

const operationPaths = {
  "+": "/add",
  "-": "/sub",
  "*": "/mul",
  "/": "/div",
};

function App() {
  const [history, setHistory] = useState([]);
  const [operation, setOperation] = useState("+");
  const [result, setResult] = useState(null);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    if (baseUrl === undefined) {
      console.warn("REACT_APP_BACKEND_URL is not set. Not fetching history");
      return;
    }
    fetch(baseUrl + "/history")
      .then((response) => response.json())
      .then((response) => {
        setHistory(response.result);
        console.log(response.result);
      })
      .catch(console.error);
  }, []);

  const calculateResult = () => {
    if (baseUrl === undefined) {
      console.warn("REACT_APP_BACKEND_URL is not set. Not calculating result");
      return;
    }

    console.log("calculating result!");

    fetch(baseUrl + operationPaths[operation], {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ x, y }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (result != null) {
          setHistory([...history, result]);
        }
        setResult(response);
      })
      .catch(console.error);
  };

  return (
    <div className="bg-slate-200 min-h-screen min-w-screen flex flex-col items-center ">
      <h2 className="text-2xl">Calculator</h2>
      <div className="flex flex-col">
        <input
          type="number"
          value={x}
          onChange={(event) => setX(event.target.value)}
        ></input>
        <div className="flex grow gap-2 justify-center my-2">
          <button
            className={`min-w-[40px] rounded-md ${operation === "+" ? "bg-green-300" : "bg-orange-300"}`}
            onClick={() => setOperation("+")}
          >
            +
          </button>
          <button
            className={`min-w-[40px] rounded-md ${operation === "-" ? "bg-green-300" : "bg-orange-300"}`}
            onClick={() => setOperation("-")}
          >
            -
          </button>
          <button
            className={`min-w-[40px] rounded-md ${operation === "*" ? "bg-green-300" : "bg-orange-300"}`}
            onClick={() => setOperation("*")}
          >
            *
          </button>
          <button
            className={`min-w-[40px] rounded-md ${operation === "/" ? "bg-green-300" : "bg-orange-300"}`}
            onClick={() => setOperation("/")}
          >
            /
          </button>
        </div>
        <input
          type="number"
          value={y}
          onChange={(event) => setY(event.target.value)}
        ></input>
        <button
          className="bg-green-300 rounded-md text-xl my-2"
          onClick={calculateResult}
        >
          Calculate Result
        </button>
      </div>

      {result && <h2 className="text-2xl">Result</h2>}
      {result && <h2>{result.result}</h2>}
      <h2 className="text-2xl ">Previous Results</h2>
      {history
        .slice(0)
        .reverse()
        .map((h, i) => (
          <div
            className="max-w-max p-4"
            key={i}
          >{`${h.x} ${h.operation} ${h.y} = ${h.result}`}</div>
        ))}
    </div>
  );
}

export default App;
