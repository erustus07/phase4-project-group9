import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFormik } from 'formik';

const UpdateCar = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    fetch(`/api/cars/${id}`)
      .then(response => response.json())
      .then(data => setCar(data));
  }, [id]);

  const formik = useFormik({
    initialValues: car || {
      model: '',
      price: '',
      image_url: ''
    },
    enableReinitialize: true,
    onSubmit: values => {
      fetch(`/api/cars/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(response => response.json())
        .then(data => console.log(data));
    }
  });

  return car ? (
    <form onSubmit={formik.handleSubmit}>
      <label>
        Model:
        <input
          type="text"
          name="model"
          onChange={formik.handleChange}
          value={formik.values.model}
        />
      </label>
      <label>
        Price:
        <input
          type="text"
          name="price"
          onChange={formik.handleChange}
          value={formik.values.price}
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image_url"
          onChange={formik.handleChange}
          value={formik.values.image_url}
        />
      </label>
      <button type="submit">Update Car</button>
    </form>
  ) : (
    <p>Loading...</p>
  );
};

export default UpdateCar;
