/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

const Counter = () => {
  const deadline: string = "October, 16, 2023";

  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num: number) => {
    return num < 10 ? "0" + num : num;
  };

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date().toString());

    if (time < 0) {
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  const valueHours: any = {
    "--value": leading0(hours),
  };
  const valueMinutes: any = {
    "--value": leading0(minutes),
  };
  const valueSeconds: any = {
    "--value": leading0(seconds),
  };

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max py-10 justify-center">
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-3xl md:text-8xl font-aubette">
          <span style={valueHours}></span>
        </span>
        <span className="font-poppins text-xs lg:text-md">hours</span>
      </div>
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-3xl md:text-8xl font-aubette">
          <span style={valueMinutes}></span>
        </span>
        <span className="font-poppins text-xs lg:text-md">minutes</span>
      </div>
      <div className="flex flex-col p-2 bg-primary rounded-box text-primary-content">
        <span className="countdown font-mono text-3xl md:text-8xl font-aubette">
          <span style={valueSeconds}></span>
        </span>
        <span className="font-poppins text-xs lg:text-md">seconds</span>
      </div>
    </div>
  );
};

export default Counter;
