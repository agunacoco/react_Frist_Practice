import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function DayList() {

    const [days, setDays] = useState([]);

    useEffect();
    return (
        <div>
            <ul className="list_day">
                {days.map(day => (
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>
                            Day {day.day}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}