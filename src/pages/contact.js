import React , { useEffect, useState} from 'react'
import stylse from '@/styles/contact.module.css';
import { useRouter } from 'next/router';

const Contact = () => {
    let router = useRouter();
    const [contact, setcontact] = useState({name:'', email:'', phone:'',message:''})
    const [isvalid, setisvalid] = useState(false)
     const {name, email , phone } = contact;
    
    const validform = ()=>{
      let valid ;
      if(name === ''){
        valid = false;
        alert('Enter your name please')
        return;
      }
      if(email === ''){
        valid = false;
          alert('Enter a valid email')
          return;
      }
      if (!/^\S+@\S+\.\S+$/.test(email)) {
        valid = false;
        alert('Please enter a valid email address');
        return; // Exit the function early
      }
      if (phone === '') {
        valid = false;
        alert('Enter your mobile number');
        return; // Exit the function early
      }
      if (!/^\d+$/.test(phone)) {
        valid = false;
        alert('Please enter a valid numeric mobile number');
        return; // Exit the function early
      }
      if(phone.length !== 11 ){
        valid = false;
        alert('Number Should be 11 digit')
        return;
      }
      setisvalid(Object.keys(!valid))
    }

  const handlesubmit= async(e)=>{
    validform()
    e.preventDefault()
     if(isvalid){
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
     else{
       res.status(404).json('Try again')
     }
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
            <input type="text"  id="name" className="form-control" name='name' value={contact.name} aria-describedby="emailHelp"  onChange={handlechange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' value={contact.email}  aria-describedby="emailHelp" onChange={handlechange} required  />
            <div id="emailhelp" className="form-text text-white">We will never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Phone</label>
            <input type="tel" className="form-control" id="phone" name='phone' value={contact.phone}  onChange={handlechange} required />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message <span style={{color:'white'}}>(optional)</span></label>
            <textarea className="form-control" id="message" name='message' value={contact.message}  onChange={handlechange} />
          </div>
          <button type="submit" onClick={validform} className="btn">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact