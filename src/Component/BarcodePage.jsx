import { Link } from "react-router-dom";
export default function BarcodePage() {
  const data = JSON.parse(localStorage.getItem("DataUser"));

  return (
    <>
      <div className="container-page">
        <Link to="/HalamanUtama">
          <div className="cross">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </Link>
        <div className="barcode-container">
          <p>Show the QR Code below to the cashier</p>
          <img src={data?.result?.qrcode} alt="" />
        </div>
      </div>
    </>
  );
}
