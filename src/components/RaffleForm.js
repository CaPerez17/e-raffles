import React, { useState } from 'react';

const RaffleForm = () => {
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar número al backend
    console.log(`Número seleccionado: ${number}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="number">Selecciona tu número:</label>
      <input
        type="number"
        id="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Ingresa un número"
        min="1"
        max="1000"
        required
      />
      <button type="submit">Participar</button>
    </form>
  );
};

export default RaffleForm;
