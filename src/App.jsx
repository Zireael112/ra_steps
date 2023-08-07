import './App.css';
import { useState } from 'react';
import { sortByDate } from './components/sort';
import Form from './components/Form';
import Table from './components/Table';

function App() {
  const [workouts, setWorkouts] = useState([]);
  
  const addWorkout = (workout) => {
    workout.id = workouts.length + 1;
    setWorkouts([...workouts, workout].sort(sortByDate));
  };

  const updateDistance = (workout) => {
    const dateIndex = workouts.findIndex(({ date }) => workout.date === date);
    const existedDate = workouts[dateIndex];
    if (!existedDate) {
      return
    }
    const newWorkout = {
      ...existedDate,
      distance: parseInt(existedDate.distance) + parseInt(workout.distance)
    };
    const newWorkouts = [...workouts];
    newWorkouts[dateIndex] = newWorkout;
    setWorkouts(newWorkouts);
  }

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((i) => i.id !== id));
  };

  return (
    <div className="wrapper">
      <Form addWorkout={addWorkout} updateDistance={updateDistance} />
      <Table workouts={workouts} deleteWorkout={deleteWorkout} />
    </div>
  )
}

export default App;
