import React from 'react'

export default function Table({ deleteWorkout, workouts }) {
  return (
    <div className="steps-list">
      {Array.isArray(workouts) && workouts.length > 0
        ? workouts.map((item) => (
          <div className="step-l" key={item.id}>
            <span>{item.date}</span>
            <span>{item.distance}</span>
            <div>
              <p className="btn-delete"
                onClick={() => deleteWorkout(item.id)} >
                ✘
              </p>
            </div>
          </div>
        ))
        : <div>
          <p className="no-steps">No steps...</p>
        </div>
      }

    </div>
  );
}
