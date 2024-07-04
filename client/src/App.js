import React, { useState } from 'react';
import Title from './Title';
import AddCar from './AddCar';
import CarList from './CarList';

const App = () => {
  const [cars, setCars] = useState([]);

  const handleCarAdded = (newCar) => {
    setCars((prevCars) => [...prevCars, newCar]);
  };

  return (
    <div>
      <Title />
      <AddCar onCarAdded={handleCarAdded} />
      <CarList />
    </div>
  );
};

export default App;
