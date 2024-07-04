import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

const DeleteCar = () => {
  const { id } = useParams();
  const history = useHistory();

  const handleDelete = () => {
    fetch(`/api/cars/${id}`, {
      method: 'DELETE'
    }).then(() => {
      history.push('/cars');
    });
  };

  return (
    <div>
      <h1>Are you sure you want to delete this car?</h1>
      <button onClick={handleDelete}>Yes, delete</button>
      <button onClick={() => history.goBack()}>No, go back</button>
    </div>
  );
};

export default DeleteCar;
