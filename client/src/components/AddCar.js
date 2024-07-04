import React, { useState } from 'react';

const AddCar = ({ onCarAdded }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);

    const response = await fetch('http://127.0.0.1:5000/api/cars', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      const newCar = await response.json();
      onCarAdded(newCar);
      setName('');
      setDescription('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;
