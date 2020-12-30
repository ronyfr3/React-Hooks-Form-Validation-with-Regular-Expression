import React from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom"
import validateInfo from './validateInfo';
import useForm from './useForm';

const FormSignup = () => {
  const { handleChange, values, errors ,setErrors} = useForm();

  const history = useHistory()

  function handleSubmit(e) {
      e.preventDefault();
      setErrors(validateInfo(values))
      if( !values.username || !/\S+@\S+\.\S+/.test(values.email) || values.password2 !== values.password){
        history.push('/')
      }else{
        history.push('/login')
      }
  };


  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
        Register Your Account
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
            required
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
            required
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        
           <button className='form-input-btn' type='submit'>
             Create An Account
          </button>

        <span className='form-input-login'>
          Already have an account? Login <Link to='/login'>here</Link>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;