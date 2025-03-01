import { useState, useEffect } from "react";

export default function Time() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-xl font-bold p-9 bg-gray-800 rounded-2xl shadow-lg">
        {time.toLocaleTimeString()}
      </div>
    </div>
  );
}
