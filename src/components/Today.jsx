import { useState } from "react";
import Conditioning from "./Conditionining";
import Running from "./Running";

export default function Today() {
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

  const daysToPlan = {
    Monday: "conditioning",
    Tuesday: "running",
    Wednesday: "conditioning",
    Thursday: "running",
    Friday: "conditioning",
  };

  const [dayState, setDayState] = useState(today);

  if (daysToPlan[dayState] === "conditioning") {
    return <Conditioning />;
  } else if (daysToPlan[dayState] === "running") {
    return <Running />;
  } else {
    return (
      <>
        <div>
          <h2>No training planned for {dayState}</h2>
        </div>
      </>
    );
  }
}
