import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

      let navigate=useNavigate()

    const [user,setUsers]= useState({

        name:'',
        username:'',
        email:'',
    })


    const{name,username,email,password,ConfirmPassword}=user

    const onInputChange=(e)=>{
setUsers({...user, [e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post('http://localhost:8080/user',user)
        navigate('/')
    };

  return <div className='container'>
      <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                  <h2 className='text-center m-4'>Register user</h2>


                  <form onSubmit={(e)=>onSubmit(e)}> 
                  <div className='mb-3'>
                      <label htmlFor='Name' className='from-label'>
                        Name
                      </label>
                      <input 
                      type={'text'}
                      className='form-control'
                      placeholder='Enter your name'
                      name='name'
                      value={name}
                      onChange={(e)=>onInputChange(e)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='Username' className='from-label'>
                        Username
                      </label>
                      <input 
                      type={'text'}
                      className='form-control'
                      placeholder='Enter your username'
                      name='username'
                      value={username}
                      onChange={(e)=>onInputChange(e)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='Email' className='from-label'>
                        E-mail
                      </label>
                      <input 
                      type={'text'}
                      className='form-control'
                      placeholder='Enter your email'
                      name='email'
                      value={email}
                      onChange={(e)=>onInputChange(e)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='Password' className='from-label'>
                      Password
                      </label>
                      <input 
                      type={'password'}
                      className='form-control'
                      placeholder='Enter your Password'
                      name='password'
                      value={password}
                      onChange={(e)=>onInputChange(e)}
                      />
                  </div>
                  <div className='mb-3'>
                      <label htmlFor='ConfirmPassword' className='from-label'>
                      Confirm Password
                      </label>
                      <input 
                      type={'password'}
                      className='form-control'
                      placeholder='Enter your Password again'
                      name='ConfirmPassword'
                      value={ConfirmPassword}
                      onChange={(e)=>onInputChange(e)}
                      />
                  </div>
                  <label>
            <input type="checkbox" name="agreeToTerms" onChange={onInputChange} />
            I agree to the terms and conditions
          </label>
                  <button type='submit' className='btn btn-primary mx-2'>submit</button>
                  <Link className='btn btn-danger mx-2' to="/">cancel</Link>
                  </form>
            </div>
      </div>
  </div>
}
