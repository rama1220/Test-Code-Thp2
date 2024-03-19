import { Link } from "react-router-dom";
import HomeLogo from "../assets/home1.png";
import Menu1 from "../assets/menu1.png";
import {useAuth} from "../Context/AuthContext"
import { useNavigate } from "react-router-dom";
export default function Footer() {

  const {LogOut} = useAuth();
  const navigate = useNavigate();

  const handleLogOut = () =>{
    LogOut();
    navigate("/");
  }
  return (
    <>
      <div className="box-navigate">
        <Link to="/HalamanUtama" className="Navigate-Link">
          <div className="logo-icon">
            <img src={HomeLogo} alt="" />
            Home
          </div>
        </Link>
        <Link to="/MenuPage" className="Navigate-Link">
          <div className="logo-icon">
            <img src={Menu1} alt="" />
            Menu
          </div>
        </Link>

       
          <div className="logo-icon"  onClick={handleLogOut}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor"  viewBox="0 0 16 16">
              <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
              <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg>
            LogOut
          </div>
      </div>
    </>
  );
}
