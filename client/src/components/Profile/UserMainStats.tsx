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

    const [calendarValues, setCalendarValues] = useState<CalendarValues>({});

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

    const until = "2024-03-01";

    const panelColors = ["#e7e4ff", "#6a3bff"];

    return (
        <div className="stats border shadow-lg border-base-300">
            <div className="stat shadow-lg">
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
                <div className="stat-title">Total Solved Problems</div>
                <div className="stat-value">{solved}</div>
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
