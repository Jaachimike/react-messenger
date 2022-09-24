import React from 'react'
import { Form } from 'react-router-dom'

const Register = () => {
  return (
    <section>
      <h3>Create an account</h3>
      <form className='form'>
        <div className='input_container'>
          <label htmlFor='name'>Name</label>
          <input type="text" name='name' />
        </div>

        <div className='input_container'>
          <label htmlFor='email'>Email</label>
          <input type="text" name='email' />
        </div>

        <div className='input_container'>
          <label htmlFor='password'>Password</label>
          <input type="password" name='password' />
        </div>
      </form>
    </section>
  )
}

export default Register