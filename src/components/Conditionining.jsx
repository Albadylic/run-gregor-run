import { useState } from "react";
import conditioningData from "../data/conditioning.json";

function renderDay(dayName, id) {
  const day = conditioningData["days"][id];
  return (
    <div className="page_body">
      <h2>{`${day.name}`}</h2>
      <div className="conditioning_exercise_container">
        {day.exercises.map((exercise) => (
          <div key={exercise.name}>
            <h3>{exercise.name}</h3>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps["1"]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Conditioning() {
  const dayIndex = new Date().getDay();
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

  const [dayState, setDayState] = useState(today);
  const daysToPlan = {
    Monday: "0",
    Wednesday: "1",
    Friday: "0",
  };

  const DayNav = () => {
    return (
      <nav className="Sidebar">
        <ul>
          <li key="Today" onClick={() => setDayState(today)}>
            Today
          </li>
          <li key="Monday" onClick={() => setDayState("Monday")}>
            Monday
          </li>
          <li key="Wednesday" onClick={() => setDayState("Wednesday")}>
            Wednesday
          </li>
          <li key="Friday" onClick={() => setDayState("Friday")}>
            Friday
          </li>
        </ul>
      </nav>
    );
  };

  if (daysToPlan.hasOwnProperty(dayState)) {
    return (
      <div className="page_container">
        <DayNav />
        {renderDay(dayState, daysToPlan[dayState])}
      </div>
    );
  } else {
    return (
      <div className="page_container">
        <DayNav />
        <div className="page_body">
          <h2>No training planned for {dayState}</h2>
        </div>
      </div>
    );
  }
}
