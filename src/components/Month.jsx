import runningData from "../data/running.json";
import { useState } from "react";

const months = runningData.months;

function Month() {
  const [chosenMonth, setChosenMonth] = useState(months[0]);
  return (
    <div className="Month">
      <nav>
        <ul>
          <li onClick={() => setChosenMonth(months[0])}>1</li>
          <li onClick={() => setChosenMonth(months[1])}>2</li>
          <li onClick={() => setChosenMonth(months[2])}>3</li>
          <li onClick={() => setChosenMonth(months[3])}>4</li>
          <li onClick={() => setChosenMonth(months[4])}>5</li>
          <li onClick={() => setChosenMonth(months[5])}>6</li>
          <li onClick={() => setChosenMonth(months[6])}>7</li>
          <li onClick={() => setChosenMonth(months[7])}>8</li>
        </ul>
      </nav>
      <div>
        <h3>
          Month {chosenMonth["index"]}: {chosenMonth["title"]}
        </h3>
        <p>Total distance: {chosenMonth["total_distance"]}</p>
        <p>Focus: {chosenMonth["focus"]}</p>
        <p>Goal: {chosenMonth["goal"]}</p>
        <p>Mantra: {chosenMonth["mantra"]}</p>

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

export default Month;
