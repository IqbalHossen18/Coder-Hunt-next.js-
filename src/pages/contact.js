import React , { useState} from 'react'
import stylse from '@/styles/contact.module.css';
import { useRouter } from 'next/router';

const contact = () => {
    let router = useRouter();
    const [contact, setcontact] = useState({name:'', email:'', phone:'',message:''})

  const handlesubmit= async(e)=>{
    e.preventDefault()
    const {name , email , phone, message} = contact;
    const response = await fetch('http://localhost:3000/api/contact',{
      method:'POST',
      headers:{
        "Content-Type": 'application/json'
      },
      body:JSON.stringify({name, email, phone , message})

    })
     const data = response.json()
    alert('Submit Successfull')
    setcontact({name:'', email:'', phone:'', message:''})
    router.push('/')
  }
  const handlechange=(e)=>{
    setcontact({...contact ,  [e.target.name] : e.target.value})
  }
  return (
    <>
      <div className={stylse.form}>
        <h3>Contact Form</h3>
        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name='name' value={contact.name} aria-describedby="emailHelp"  onChange={handlechange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' value={contact.email}  aria-describedby="emailHelp" onChange={handlechange} required  />
            <div id="emailhelp" className="form-text text-white">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" name='phone' value={contact.phone}  onChange={handlechange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message <span style={{color:'white'}}>(optional)</span></label>
            <textarea className="form-control" id="message" name='message' value={contact.message}  onChange={handlechange} />
          </div>
          <button type="submit" className="btn">Submit</button>
        </form>
      </div>
    </>
  )
}

export default contact