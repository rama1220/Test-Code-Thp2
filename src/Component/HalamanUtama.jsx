import Logo from "../assets/logo.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthContext";
export default function HalamanUtama() {
  const { logout } = useAuth();
  const [currentSlide, setCurrentSlide] = useState(1);
  const data = JSON.parse(localStorage.getItem("DataUser"));
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % 3) + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container-page">
        <div className="logo-page">
          <img src={Logo} alt="logo" />
          <div className="logout" onClick={() => logout()}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z" />
              <path d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg>
          </div>
        </div>
        <div className="bg-motif">
          <div className="box-customer">
            <p>{data?.result?.greeting},</p>
            <p className="name">{data?.result?.name}</p>
            <div className="barcode">
              <div className="left">
                <Link to="/BarcodePage">
                  <div className="img-code">
                    <img src={data?.result?.qrcode} alt="" />
                  </div>
                </Link>
                <hr />
              </div>
              <div className="right">
                <div className="status-poit">
                  <div className="saldo">
                    <p>Saldo</p>
                    <p className="nominal"> Rp. {data?.result?.saldo}</p>
                  </div>
                  <div className="point">
                    <p>Points</p>
                    <p className="total-point">{data?.result?.point}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-slider">
          {data?.result?.banner.map((item, index) => (
            <img
              src={item}
              alt=""
              key={index}
              style={{
                transform: `translateX(-${(currentSlide - 1) * 100}%)`,
              }}
            />
          ))}
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
        <Footer />
      </div>
    </>
  );
}
