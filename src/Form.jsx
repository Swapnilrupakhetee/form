import React from 'react'
import "./Form.css"

function Form() {
  return (
    <div className='form-container'>
        <form className='form'>
            <div className='submitted'>
                Thank you for filling the form !!!</div>
            <div className='form-group'>

                <label className='form-label'>Name: </label>
                <input className='form-input' name='firstName' placeholder='Name' />
            </div>
            <div className='form-group'>
                <label className='form-label'>Last Name: </label>
                <input className='form-input' name='lastName' placeholder='Email' />
            </div>
            <div className='form-group'>
                <label className='form-label'>Email: </label>
                <input className='form-input' name='email' placeholder='Email' />
            </div>
            
            <div className='form-group-button'>
                <button className='form-button'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form