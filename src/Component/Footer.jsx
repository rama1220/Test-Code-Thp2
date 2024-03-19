import { Link } from "react-router-dom";
import HomeLogo from "../assets/home1.png";
import Menu1 from "../assets/menu1.png";
export default function Footer() {
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
      </div>
    </>
  );
}
