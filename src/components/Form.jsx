import { useState } from "react";
import "./Form.css"

import React from 'react'

const Form = ({title, handleClick}) => {
    const[email, setEmail] = useState('')
    const[pass, setPass] = useState('')

  return (
    <div className="form-container">
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Your email"/>
        <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="Your password"/>
        <button onClick={()=> handleClick(email,pass)} className="bnt">
            {title}
        </button>
    </div>
  )
}

export  {Form}