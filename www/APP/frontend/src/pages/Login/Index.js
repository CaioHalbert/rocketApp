import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/sessions', { email });

    const { _id } = response.data;

    localStorage.setItem('user', _id);

    history.push('/dashboard')
  }
  return (
    <>
      <p>
        ofereça <strong>Horarios</strong> para clientes e organize sua <strong>Agenda</strong> para a seu estudio
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="seu melhor e-mail"
            onChange={event => setEmail(event.target.value)}
          />

        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}