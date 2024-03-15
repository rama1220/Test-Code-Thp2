/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [token, setToken] = useState("");
  const [bearer, setBearer] = useState("");
  useEffect(() => {
    if (localStorage.getItem("access_token") !== null) {
      setToken(localStorage.getItem("access_token"));
      setUser(true);
    }
  }, [user]);

  useEffect(() => {
    if (localStorage.getItem("token_type") !== null) {
      setBearer(localStorage.getItem("token_type"));
    }
  }, [user]);

  const instance = axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://soal.staging.id",
  });

  const endpoint = "https://soal.staging.id";

  const Login = async (grant_type, client_secret, client_id, username, password) => {
    try {
      const response = await axios.post(`${endpoint}/oauth/token`, {
        grant_type: grant_type,
        client_secret: client_secret,
        client_id: client_id,
        username: username,
        password: password,
      });

      const { access_token, token_type } = response.data;

      if (access_token && token_type) {
        localStorage.setItem("access_token", access_token);
        localStorage.setItem("token_type", token_type);
        console.log(response.data);
        setUser(true);
        console.log(response.data);
        window.location.href = "/HalamanUtama";

        return response.data;
      } else {
        throw new Error("Failed to receive access token or token type");
      }
    } catch (error) {
      console.error("Failed to log in:", error);
      throw error;
    }
  };

  const Home = async () => {
    try {
      if (!bearer || !token) {
        throw new Error("Token data not found in local storage");
      }

      const response = await instance.get("/api/home", {
        headers: {
          Authorization: `${bearer} ${token}`,
        },
      });

      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch home data:", error);
      throw error;
    }
  };

  const values = {
    Login,
    Home,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, useAuth };
