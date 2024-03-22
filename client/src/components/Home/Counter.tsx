/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useMemo } from "react";

const Counter = () => {
    const [timeRemaining, setTimeRemaining] = useState<number>(0);

    // Calculate tomorrow's date and memoize it to prevent unnecessary recalculations
    const tomorrow = useMemo(() => {
        const nextDay = new Date();
        nextDay.setDate(nextDay.getDate() + 1);
        nextDay.setHours(24, 0, 0, 0); // Set the deadline to midnight
        return nextDay;
    }, []);

    // Update the time remaining every second based on tomorrow's date
    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = new Date();
            const timeDifference = tomorrow.getTime() - currentTime.getTime();

            if (timeDifference < 0) {
                clearInterval(interval);
                setTimeRemaining(0);
            } else {
                setTimeRemaining(timeDifference);
            }
        }, 1000);

        // Clean up the interval when the component unmounts or 'tomorrow' changes
        return () => clearInterval(interval);
    }, [tomorrow]); // 'tomorrow' is a dependency of the useEffect hook

    // Helper function to add leading zeros to numbers
    const leadingZero = (num: number) => {
        return num < 10 ? "0" + num : num;
    };

    // Calculate hours, minutes, and seconds from the time remaining
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);

    // Create a style object for inline CSS with the leadingZero function result
    const hourstyle: any = { "--value": leadingZero(hours) };
    const minutestyle: any = {
        "--value": leadingZero(minutes),
    };
    const secondstyle: any = {
        "--value": leadingZero(seconds),
    };

    return (
        <div className="grid grid-flow-col gap-6 text-center auto-cols-max justify-center">
            {/* Display hours */}
            <div className="flex flex-col p-2">
                <span className="countdown text-4xl lg:text-6xl font-aubette justify-center text-primary">
                    <span style={hourstyle}></span>
                </span>
                <span className="font-poppins text-xs lg:text-md">
                    &nbsp;&nbsp;hours&nbsp;&nbsp;
                </span>
            </div>
            <div className="flex flex-col p-2">
                <span className="countdown text-4xl lg:text-6xl font-aubette justify-center text-primary">
                    <span style={minutestyle}></span>
                </span>
                <span className="font-poppins text-xs lg:text-md">
                    &nbsp;&nbsp;minutes&nbsp;&nbsp;
                </span>
            </div>
            <div className="flex flex-col p-2">
                <span className="countdown text-4xl lg:text-6xl font-aubette justify-center text-primary">
                    <span style={secondstyle}></span>
                </span>
                <span className="font-poppins text-xs lg:text-md">
                    &nbsp;&nbsp;seconds&nbsp;&nbsp;
                </span>
            </div>
        </div>
    );
};

export default Counter;
