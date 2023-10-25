import React, { useState } from 'react'

const Createprofile = () => {

    const [firstname, setfirst]=useState('')
    const [lastname, setlast]=useState('')
    const [email, setemail]= useState('')
    const [pass, setpass]=useState('')
    const [yourself, setyourself]= useState('')
    const [Pending, setPending] = useState(false)

    const handleSubmit=(e)=>{
        e.preventDefault();
        const blog= {firstname, lastname, email, pass, yourself}
        setPending(true)
        fetch('http://localhost:8000/profile',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(blog)
        }).then((e)=>{
            setPending(false)
            // history.push('/')
        })
    }
  return (
    <div className='craeteprofile'>
        <h1>
            Your profile
        </h1>
    </div>
  )
}

export default Createprofile