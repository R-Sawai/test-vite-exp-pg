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
    <div className="h-screen bg-gray-200 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 shadow flex flex-col items-center gap-4">
        <button
          className="bg-blue-200 p-2 rounded-xl cursor-pointer"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        {time ? (
          <p>
            Now time is
            <label className="bg-amber-200 rounded-xl px-2">{time}</label>
          </p>
        ) : (
          <p className="bg-amber-200 rounded-xl px-2">fetch Error</p>
        )}
      </div>
    </div>
  );
};
