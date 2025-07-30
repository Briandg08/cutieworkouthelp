import React from "react";
import ExerciseCard from "./ExerciseCard";

export default function DayView({ title, exercises }) {
  return (
    <div className="day">
      <h2>{title}</h2>
      <div className="exercises">
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} {...exercise} />
        ))}
      </div>
    </div>
  );
}
