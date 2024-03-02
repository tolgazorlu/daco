/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { useGetDailyProblemsQuery } from "../../hooks/problemHooks";

const Counter = () => {
    const { data: problems } = useGetDailyProblemsQuery();

    const [hours, setHours] = useState<number>(0);
    const [minutes, setMinutes] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [deadline, setDeadline] = useState<string>("December, 10, 2028");

    useEffect(() => {
        if (problems) {
            setDeadline(problems[0].date);
        }
        setInterval(() => getTimeUntil(deadline), 1000);

        return () => getTimeUntil(deadline);
    }, [deadline, problems]);

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

    const leading0 = (num: number) => {
        return num < 10 ? "0" + num : num;
    };

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
        <div className="grid grid-flow-col gap-6 text-center auto-cols-max py-10 justify-center">
            <div className="flex flex-col p-2 bg-base-300 rounded-box text-primary">
                <span className="countdown text-7xl md:text-8xl font-aubette justify-center">
                    <span style={valueHours}></span>
                </span>
                <span className="font-poppins text-xs lg:text-md">
                    &nbsp;&nbsp;hours&nbsp;&nbsp;
                </span>
            </div>
            <div className="flex flex-col p-2 bg-base-300 rounded-box text-primary">
                <span className="countdown text-7xl md:text-8xl font-aubette justify-center">
                    <span style={valueMinutes}></span>
                </span>
                <span className="font-poppins text-xs lg:text-md">minutes</span>
            </div>
            <div className="flex flex-col p-2 bg-base-300 rounded-box text-primary">
                <span className="countdown text-7xl md:text-8xl font-aubette justify-center">
                    <span style={valueSeconds}></span>
                </span>
                <span className="font-poppins text-xs lg:text-md">seconds</span>
            </div>
        </div>
    );
};

export default Counter;
