/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useContext, useEffect, useState } from "react";
import { User } from "../../contexts/User";
import Calendar from "react-github-contribution-calendar";

interface CalendarValues {
    [date: string]: number;
}

const UserMainStats = () => {
    const { state } = useContext(User);
    const { userInfo } = state;
    const [solved, setSolved] = useState<number>(0);

    // Your component code
    const [calendarValues, setCalendarValues] = useState<CalendarValues>({});

    useEffect(() => {
        if (userInfo?.solvedProblems) {
            setSolved(userInfo.solvedProblems.length);
            if (userInfo.solvedProblems.length > 0) {
                const dateCounts: CalendarValues =
                    userInfo.solvedProblems.reduce(
                        (acc: CalendarValues, solvedProblem) => {
                            const date = solvedProblem.date.split("T")[0]; // Extracting date part
                            acc[date] = (acc[date] || 0) + 1; // Incrementing count for each date
                            return acc;
                        },
                        {},
                    );
                setCalendarValues(dateCounts);
            }
        }
    }, [userInfo?.solvedProblems]);

    const until = "2024-03-01";

    const panelColors = ["#fffbeb", "#fabe25"];

    return (
        <div className="stats bg-neutral shadow-md ">
            <div className="stat">
                <Calendar
                    values={calendarValues}
                    until={until}
                    weekLabelAttributes={undefined}
                    monthLabelAttributes={undefined}
                    panelAttributes={undefined}
                    panelColors={panelColors}
                />
            </div>

            <div className="stat">
                <div className="stat-title text-neutral-content">
                    Solved Problems
                </div>
                <div className="stat-value text-neutral-content">{solved}</div>
                <div className="stat-actions">
                    <a href="/" className="btn btn-sm btn-primary-content">
                        Check New Problems
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserMainStats;
