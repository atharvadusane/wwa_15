import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import { useHistory } from "react-router-dom";


const Login = () => {

  const [firstname, setfirst] = useState('')
  const [lastname, setlast] = useState('')
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const [yourself, setyourself] = useState('')
  const [Pending, setPending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { firstname, lastname, email, pass, yourself }
    setPending(true)
    fetch('http://localhost:8000/profile', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then((e) => {
      setPending(false)
      // history.push('/')
    })
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <div className="login-container">
          <div onSubmit={handleSubmit} class="form-floating mb-3">
            <input class="form-control" id="floatingInput" placeholder="Email address"
              type="text"
              required
              value={firstname}
              onChange={(e) => { setfirst(e.target.value) }}
            />
            <label for="floatingInput">Firstname</label>
          </div>
          <div class="form-floating mb-3">
            <input class="form-control" id="floatingInput" placeholder="Email address"
              type="text"
              required
              value={lastname}
              onChange={(e) => { setlast(e.target.value) }}
            />
            <label for="floatingInput">Lastname</label>
          </div>
          <div class="form-floating mb-3">
            <input class="form-control" id="floatingInput" placeholder="Email address" 
            type="text"
            required
            value={email}
            onChange={(e) => { setemail(e.target.value) }}
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <textarea type="textarea" class="form-control" id="floatingInput" placeholder="Email address" />
            <label for="floatingInput">Tell us about yourself</label>
          </div>
          {/* <div class="btn-group mb-3 mr-5">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            What are you looking for?
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#"> <Link to={'/recruitment'}>Recruitment</Link> </a></li>
            <li><a class="dropdown-item" href="#">Contact us</a></li>
            <li><a class="dropdown-item" href="#">Suggestions for improvement</a></li>
          </ul>
        </div> */}
        </div>
        <button class="btn btn-info sub-btn">
          <Link to={'/submitted'} >Submit</Link>
        </button>
      </form>
    </div>
  )
}

export default Login