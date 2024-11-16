import runningData from "../data/running.json";
import { useState } from "react";

const months = runningData.months;

export default function Running() {
  const [chosenMonth, setChosenMonth] = useState(months[0]);
  return (
    <div div className="page_container">
      <nav className="Sidebar">
        <ul>
          <li onClick={() => setChosenMonth(months[0])}>1 - October</li>
          <li onClick={() => setChosenMonth(months[1])}>2 - November</li>
          <li onClick={() => setChosenMonth(months[2])}>3 - December</li>
          <li onClick={() => setChosenMonth(months[3])}>4 - January</li>
          <li onClick={() => setChosenMonth(months[4])}>5 - February</li>
          <li onClick={() => setChosenMonth(months[5])}>6 - March</li>
          <li onClick={() => setChosenMonth(months[6])}>7 - April</li>
          <li onClick={() => setChosenMonth(months[7])}>8 - May</li>
        </ul>
      </nav>
      <div className="page_body">
        <h3>
          Month {chosenMonth["index"]}: {chosenMonth["title"]}
        </h3>
        <p>Total distance: {chosenMonth["total_distance"]}</p>
        {/* <p>Focus: {chosenMonth["focus"]}</p>
        <p>Goal: {chosenMonth["goal"]}</p>
        <p>Mantra: {chosenMonth["mantra"]}</p> */}

        <div className="runs_container">
          {chosenMonth["runs"].map((run) => (
            <div>
              <p>
                <strong>{`${run.type[0].toUpperCase()}${run.type.substring(
                  1
                )}`}</strong>
              </p>
              <p>{run.distance}K</p>
              <p>Effort: {run.effort}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
