import { useEffect, useState, type FC } from "react";

export const App: FC = () => {
  const [count, setCount] = useState(0);

  const [time, setTime] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/time")
      .then((res) => res.json())
      .then((data) => setTime(JSON.stringify(data)));
  }, []);

  return (
    <div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p>Now time is {time}</p>
      </div>
    </div>
  );
};
