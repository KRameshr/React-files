import React, { useState } from 'react'

const Custo = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (event) => {
        setForm({
          ...form,
          [event.target.id]: event.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
    
        alert(form.email + ' ' + form.password);
      };
  return (
    <div className='container mt-9'>
         <form onSubmit={handleSubmit} className='form-group'>
      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          value={form.email}
          onChange={handleChange}
          className='form-control mt-8'
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default Custo