import { Outlet } from "react-router-dom";
import Login from "./Component/Login";
import { useEffect, useState } from "react";
function App() {
  const [token, setToken]=useState(null)

  useEffect(()=>{
    if(localStorage.getItem("access_token") !=="null"){
      setToken(localStorage.getItem("access_token"))
    }
  },[])

  return (
    <>
    {token ? <Outlet /> : <Login />}
    </>
  );
}

export default App;
