/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect, useState } from "react";
import { User } from "../../contexts/User";
import Calendar from "react-github-contribution-calendar";

interface CalendarValues {
    [date: string]: number;
}

interface ThemeColors {
    [theme: string]: string[];
}

const themeColors: ThemeColors = {
    light: ["#F2F2F2", "#4A00FF"],
    dark: ["#15191E", "#747FFF"],
};

const UserMainStats = () => {
    const { state } = useContext(User);
    const { userInfo } = state;
    const [solved, setSolved] = useState<number>(0);
    const [calendarValues, setCalendarValues] = useState<CalendarValues>({});

    const storedTheme = localStorage.getItem("theme");
    const currentTheme = storedTheme ? JSON.parse(storedTheme) : "light";
    const currentThemeColors = themeColors[currentTheme];
    console.log(currentTheme);
    console.log(themeColors[currentTheme]);

    useEffect(() => {
        if (userInfo?.solvedProblems) {
            if (userInfo.solvedProblems.length > 0) {
                const dateCounts: CalendarValues =
                    userInfo.solvedProblems.reduce(
                        (acc: CalendarValues, solvedProblem) => {
                            const date = solvedProblem.date
                                ? solvedProblem.date.split("T")[0]
                                : null;
                            if (date) {
                                acc[date] = (acc[date] || 0) + 1;
                            }
                            return acc;
                        },
                        {},
                    );
                setCalendarValues(dateCounts);
                setSolved(userInfo.solvedProblems.length);
            }
        }
    }, [userInfo?.solvedProblems]);

    const date = new Date();
    const year = String(date.getFullYear());
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");

    let until = `${year}-${month}-${day}`;
    return (
        <div className="stats border shadow-lg border-base-300">
            <div className="stat shadow-lg flex items-center">
                <Calendar
                    values={calendarValues}
                    until={until}
                    weekLabelAttributes={undefined}
                    monthLabelAttributes={undefined}
                    panelAttributes={undefined}
                    panelColors={currentThemeColors}
                />
            </div>

            <div className="stat">
                <div className="stat-figure text-accent">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                </div>
                <div className="stat-title">Total Solved Problems</div>
                <div className="stat-value text-accent">{solved}</div>
                <div className="stat-desc">
                    You created your account this date!
                </div>
                <div className="stat-actions">
                    <a
                        href="/"
                        className="btn btn-sm btn-accent text-accent-content"
                    >
                        Check New Problems
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserMainStats;
