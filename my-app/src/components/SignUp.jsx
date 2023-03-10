import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import ReactDOM from 'react-dom/client';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, SetUsername] = useState("");
  // console.log('User', username)

  const [hash_password, SetPassword] = useState("");
  // console.log('password', password)

  const Registering = async () => {
    console.log("We are registering!");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: hash_password,
      }),
    };

    const data = await fetch("/user", requestOptions);
    console.log("its time to save it!", data);

    navigate("/");
  };

  // const Testing  = (event) => {
  //   event.preventDefault();
  //   alert(`The name you entered was: ${name}, and your password is: ${password}`);
  // }
  return (
    <div>
      <div className="Form">
        <h2>Sign Up</h2>
        <form>
          <label>Username: </label>
          <input
            id="username"
            name="username"
            onChange={(e) => {
              SetUsername(e.target.value);
            }}
            required
          />
          <label>Password: </label>
          <input
            id="password"
            name="password"
            onChange={(e) => {
              SetPassword(e.target.value);
            }}
            required
          />
          <input onClick={Registering} className="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
