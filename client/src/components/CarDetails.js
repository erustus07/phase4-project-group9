import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`/api/cars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data));
  }, [id]);

  return car ? (
    <div>
      <h1>{car.model}</h1>
      <img src={car.image_url} alt={car.model} />
      <p>Price: {car.price}</p>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default CarDetails;
