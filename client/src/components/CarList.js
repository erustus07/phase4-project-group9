import React, { useEffect, useState } from 'react';

const CarList = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/cars');
      const data = await response.json();
      setCars(data);
    };

    fetchCars();
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <h2>{car.name}</h2>
          <p>{car.description}</p>
          <img src={`http://127.0.0.1:5000/uploads/${car.image}`} alt={car.name} />
        </div>
      ))}
    </div>
  );
};

export default CarList;
