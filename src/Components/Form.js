import axios from 'axios'
import'./Form.css'
import React, { useState } from 'react'

const Form = () => {
  const [data,setData]=useState(
            {
                username:'',
                email:'',
                Subject:'',
                Message:''
            }
        )
        const{username,email,Subject,Message}=data;
        const onchange=e=>
        {
            setData({...data,[e.target.name]:e.target.value})
        }
  const submitHandler=(e)=>
  {
    e.preventDefault();
    console.log(data);
   

   axios.post("https://portfolia-88b12-default-rtdb.firebaseio.com/contact.json",data).then(()=> alert("post succesfully"))

  }
  return (
    <div>
      
        <form onSubmit={submitHandler}>
            <label>Your Name</label>
            <input type="text" name="username" value={username} placeholder='Username' onChange={onchange}></input>
            {/* <input type='text'name='username' value={username}  onClick={onchange} ></input> */}
            <label>Email</label>
            <input type="email" name="email" value={email} placeholder='Email' onChange={onchange}></input>
            <label>Subject</label>
            <input type='text' name='Subject' value={Subject} placeholder='Subject'  onChange={onchange}></input>
            <label>Message</label>
            <textarea rows='6' name='Message' value={Message} placeholder='Type Your Message'onChange={onchange}></textarea>
            <button className='btn' >Submit</button>
            
        </form>
       
    </div>
  )
}

export default Form