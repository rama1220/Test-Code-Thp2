import Logo from "../assets/logo.png";
import HomeLogo from "../assets/home1.png";
import Menu2 from "../assets/menu2.png";
import { Link } from "react-router-dom";
// import { useAuth } from "../Context/AuthContext";
export default function HalamanUtama() {
  //   const { useData } = useAuth();
  //   console.log(useData);
  return (
    <>
      <div className="container-page">
        <div className="logo-page">
          <img src={Logo} alt="logo" />
        </div>
        <div className="bg-motif">
          <div className="box-customer">
            <p>Good Night,</p>
            <p className="name">Guntur Saputro</p>
            <div className="barcode">
              <div className="left">
                <Link to="/BarcodePage">
                  <div className="img-code">
                    <img src="https://chart.googleapis.com/chart?chl=5133198517940&chs=250x250&cht=qr&chld=H%7C0" alt="" />
                  </div>
                </Link>
                <hr />
              </div>
              <div className="right">
                <div className="status-poit">
                  <div className="saldo">
                    <p>Saldo</p>
                    <p className="nominal"> Rp. 678000</p>
                  </div>
                  <div className="point">
                    <p>Points</p>
                    <p className="total-point">3.500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-slider">
          <img src={Logo} alt="" />
        </div>
        <div className="box-view">
          <div className="dot">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </div>
          <p>
            view all{" "}
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </span>
          </p>
        </div>
        <div className="box-navigate">
          <div className="logo-icon">
            <img src={HomeLogo} alt="" />
            home
          </div>
          <div className="logo-icon">
            <img src={Menu2} alt="" />
            Menu
          </div>
        </div>
      </div>
    </>
  );
}
