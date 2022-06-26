import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContent";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const { signUp } = useUserAuth();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCred) => {
        //signed in
        const user = userCred.user;
        // console.log("user created: ".cred.user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errMessage = err.message;
        setError(err.message);
        toast.error(`There was an error of ${err.message}`);
      });
    setEmail("");
    setPassword("");
    navigate("/");
  };

  const { active } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    if (active && active.token) navigate("/");
  }, [active, navigate]);

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        className="form-control"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your Email"
        autoFocus
      />
      <input
        type="password"
        className="form-control"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Your Password"
      />
      <button type="submit" className="btn btn-raised btn-primary">
        Register
      </button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {registerForm()}
          <p>should be here</p>
        </div>
      </div>
    </div>
  );
};
export default Register;
