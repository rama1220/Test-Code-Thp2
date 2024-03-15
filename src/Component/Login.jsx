import Logo from "../assets/logo.png";
import { useState } from "react";
import { useAuth } from "../Context/AuthContext";
// import { useNavigate } from "react-router-dom";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { Login } = useAuth();
  // const navigate = useNavigate();
  const grant_type = "password";
  const client_secret = "0a40f69db4e5fd2f4ac65a090f31b823";
  const client_id = "e78869f77986684a";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await Login(grant_type, client_secret, client_id, username, password);
    } catch (error) {
      console.error("Failed to log in:", error.message);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <form action="" className="form" onSubmit={handleLogin}>
          <p>Email</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <p>Password</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
