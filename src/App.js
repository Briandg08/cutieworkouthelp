import React from "react";
import DayView from "./components/DayView";
import data from "./data";

function App() {
  return (
    <div className="app">
      <h1>Princess Workout Visual Guide</h1>
      {data.map((day, idx) => (
        <DayView key={idx} title={`Day ${idx + 1}`} exercises={day} />
      ))}
    </div>
  );
}

export default App;
