import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import logo from "../assets/logo.jpg"
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="register-container">
      <div className="register-card">
        <img src={logo} alt="Logo" className="logo-img" />
        <h2>Foradem</h2>
        <p>Create your account</p>

        <form>
          <div className="input-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>

        <p className="toggle-text">
          Already have an account?{" "}
          <span onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            Sign In
          </span>
        </p>
      </div>
    </div>
  );
}
export default Register;
