import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setName("")
    setEmail("");
    setPassword("");
    alert(`Login Successfully ${name}`);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const nameHandler = (event) => {
   setName(event.target.value)
  };

  const buttonHandler = () =>{
    console.log("Login Successfully")
  }

  return (
    <form onSubmit={handleSubmit}>
     <div>
      <label><h4>Name</h4></label>
        <input style={{marginLeft:"40px",outline:"none"}}
          type="text"
          name="text"
          id="text"
          value={name}
          onChange={nameHandler}
          required
        /></div>
    <br></br>
      <div>
        <label><h4>Email</h4></label>
        <input style={{marginLeft:"40px",outline:"none"}}
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={emailHandler}
          required
        />
      </div>
      <br></br>
      <div>
        <label><h4>Password</h4></label>
        <input style={{marginLeft:"14px",outline:"none"}}
          type="password"
          name="password"
          value={password}
          onChange={passwordHandler}
          required
        />
      </div>
      <br></br>
      <button onClick={buttonHandler} style={{outline:"none"}}>Login</button>
    </form>
  );
}

export default Login;
