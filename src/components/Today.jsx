import { useState } from "react";
import months from "../data/months.json";
import { Link } from "react-router-dom";

export default function Today() {
  const dayIndex = new Date().getDay();
  const monthIndex = new Date().getMonth();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = days[dayIndex];

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const thisMonth = monthNames[monthIndex];

  const currentMonthData = months["months"].filter(
    (obj) => obj.name === thisMonth
  )[0];

  const daysToPlan = {
    Monday: "conditioning",
    Tuesday: "running",
    Wednesday: "conditioning",
    Thursday: "running",
    Friday: "conditioning",
  };

  const [dayState] = useState(today);
  const [monthState, setMonthState] = useState(currentMonthData);

  const Month = () => {
    return (
      <div>
        <h2>
          {monthState.name}: {monthState.title}
        </h2>
        <p>{monthState.focus}</p>
        <p>Goal: {monthState.goal}</p>
        <p>Mantra: {monthState.mantra}</p>
      </div>
    );
  };

  const MonthNav = () => {
    return (
      <nav className="Sidebar">
        <ul>
          <li
            key={currentMonthData.name}
            onClick={() => setMonthState(currentMonthData)}
          >
            This month
          </li>
          {months["months"].map((month) => (
            <li key={month.name} onClick={() => setMonthState(month)}>
              {month.name}
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className="page_container">
      <MonthNav />
      <div className="page_body">
        <Month />
        {daysToPlan[dayState] === "conditioning" ? (
          <h2>
            Today is focused on <Link to="/conditioning">conditioning</Link>
          </h2>
        ) : daysToPlan[dayState] === "running" ? (
          <h2>
            Today is focused on <Link to="/running">running</Link>
          </h2>
        ) : (
          <h2>No training planned for {dayState}</h2>
        )}
      </div>
    </div>
  );
}
