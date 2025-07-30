import React from "react";

export default function ExerciseCard({ title, image, tips }) {
  return (
    <div className="exercise-card">
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ maxWidth: "100%" }} />
      <ul>
        {tips.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}
