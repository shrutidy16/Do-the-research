import React from 'react'
import './signup.css'
export default function Signup() {
  return (
    <div className="Signup">
      <div className="signupContainer">
        <h1>Welcome Back!</h1>

        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <a href="login">Already a user? Sign in</a>
        <button className="signupBut">
          <p>Signup</p>
        </button>

      </div>
    </div>
  )
}
