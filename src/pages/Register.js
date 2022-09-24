import React, {useState} from 'react'
import { Form } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    error: null,
    loading: false,
  });

  const {name, email, password, error, loading} = data;


  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value})
  }
  const handlSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    if(!name ||!email || !password) {
      setData({...data, error: 'All fields are required'})
    }
  }

  return (
    <section>
      <h3>Create an account</h3>
      <form className='form' onSubmit={handlSubmit}>
        <div className='input_container'>
          <label htmlFor='name'>Name</label>
          <input type="text" name='name' value={name} onChange={handleChange} />
        </div>

        <div className='input_container'>
          <label htmlFor='email'>Email</label>
          <input type="text" name='email' value={email} onChange={handleChange}/>
        </div>

        <div className='input_container'>
          <label htmlFor='password'>Password</label>
          <input type="password" name='password' value={password} onChange={handleChange} />
        </div>
        {error ? <p className='error'>{error}</p>: null}
        <div className='btn_container'>
          <button className='btn'>Register</button>
        </div>
      </form>
    </section>
  )
}

export default Register