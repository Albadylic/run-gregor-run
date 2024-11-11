import conditioningData from "../data/conditioning.json";

export default function Conditioning() {
  return (
    <div>
      {conditioningData["plan"]["days"].map((day) => (
        <div>
          <h2>{day.name}</h2>
          {day.exercises.map((exercise) => (
            <div>
              <h3>{exercise.name}</h3>
              <p>Sets: {exercise.sets}</p>
              <p>Reps: {exercise.reps}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
