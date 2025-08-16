import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "./Login.css";

 function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-card">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2>Foradem</h2>
        <p>Welcome back, please login</p>
        
        <form>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Sign In</button>
        </form>

        <p className="toggle-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/register")} style={{cursor: "pointer"}}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
export default Login
