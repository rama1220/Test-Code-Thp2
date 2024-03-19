/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);


const AuthProvider = ({ children }) => {
const [userData, setUserData] = useState({});
const [menuData, setMenu]= useState({})


  const endpoint = "https://soal.staging.id";

  const Login = async (grant_type, client_secret, client_id, username, password) => {
    try {
      const response = await axios.post(`${endpoint}/oauth/token`, {
        grant_type,
        client_secret,
        client_id,
        username,
        password,
      });

      const { access_token, token_type } = response.data;

      if (access_token && token_type) {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("token_type", token_type);
        await Home(token_type, access_token);
        await Menu(token_type, access_token)
        return response.data;
      } else {
        throw new Error("Failed to receive access token or token type");
      }
    } catch (error) {
      console.error("Failed to log in:", error);
      throw error;
    }
  };

  const Home = async (bearer, token) => {
    try {
      const response = await axios.get(`${endpoint}/api/home`, {
        headers: {
          Authorization: `${bearer} ${token}`,
        },
      });
      console.log(response.data);
      localStorage.setItem("DataUser", JSON.stringify(response.data));
      setUserData(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch home data:", error);
      throw error;
    }
  };

  const Menu = async (bearer, token) => {
    try{
      const response = await axios.post(`${endpoint}/api/menu`,{
        show_all : "1"
      },{
        headers: {
          Authorization: `${bearer} ${token}`,
        }
      })
      console.log(response.data);
      localStorage.setItem("DataMenu", JSON.stringify(response.data));
      setMenu(response.data);
      return response.data;
    }catch(error){
      console.error("Failed to fetch menu data:", error);
    }
    
  }

  const values = { Login, Home, Menu, userData, menuData };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
