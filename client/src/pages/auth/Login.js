import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContent";
// import { auth, googleAuthProvider } from "";
// import { getAuth, googleAuthProvider } from "../../firebase";
import { toast } from "react-toastify";
import { Button } from "antd";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { createOrUpdateUser } from "../../functions/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/user/history");
    } catch (err) {
      setError(err.message);
      toast.error(`There was an error of ${err.message}`);
    }
  };

  const location = useLocation();
  let dispatch = useDispatch();

  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    let intended = location.state;
    if (intended) {
      return;
    } else {
      if (user && user.token) navigate("/", { replace: true });
    }
  }, [user, navigate]);

  const roleBasedRedirect = (res) => {
    let intended = location.state;
    if (intended) {
      navigate(intended.from, { replace: true });
    } else {
      if (res.data.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/history");
      }
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      navigate("/user/history");
    } catch (err) {
      setError(err.message);
    }
  };
  const loginForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          autoFocus
        />
      </div>
      <div className="group-form">
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Your Password"
        />
      </div>

      <Button
        onClick={handleSubmit}
        type="primary"
        className="mb-3"
        block
        shape="round"
        icon={<MailOutlined />}
        size="large"
        disabled={!email || password.length < 6}
      >
        Login with Email/ Password
      </Button>
    </form>
  );
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {/* {loading ? (
            <h4>Login</h4>
          ) : (
            <h4 className="text-danger">Loading...</h4>
          )} */}
          {loginForm()}
          <Button
            onClick={handleGoogleSignIn}
            type="danger"
            className="mb-3"
            block
            shape="round"
            icon={<GoogleOutlined />}
            size="large"
          >
            Login with Google
          </Button>
          <Link to="/forgot/password" className=" float-end text-danger">
            Forgot Password
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
