import React, { useState } from 'react'
import "./Form.css"

function Form() {
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: ''
        

    })
    const[submitted,setSubmitted] = useState(false)
    const handlefirstName =(e)=>{
        setValues({
          ...values,
            firstName: e.target.value
        })
     
    }
    const handlelastName=(e)=>{
        setValues({
            ...values,
            lastName:e.target.value
        })
    }
    const handleemail =(e)=>{
        setValues({
            ...values,
            email:e.target.value
        })
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        setSubmitted(true)
    }

  return (
    <div className='form-container'>
        <form className='form'>
            {submitted ? <div className="submitted">
                Thank you for filling the form !!!</div>:null}
            <div className='form-group'>

                <label className='form-label'>Name: </label>
                <input onChange={handlefirstName} value={values.firstName} className='form-input' name='firstName' placeholder='Name' />
                {submitted && !values.firstName ?<span>Invalid value</span>: null }
            </div>
            <div className='form-group'>
                <label className='form-label'>Last Name: </label>
                <input onChange={handlelastName} value={values.lastName} className='form-input' name='lastName' placeholder='Email' />
                {submitted && !values.lastName ?<span>Invalid value</span> :null}
            </div>
            <div className='form-group'>
                <label className='form-label'>Email: </label>
                <input onChange={handleemail} value={values.email} className='form-input' name='email' placeholder='Email' />
                {submitted && !values.email ? <span>Invalid value</span>:null}
            </div>
            
            <div className='form-group-button'>
                <button className='form-button' onClick={handleSubmit}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Form