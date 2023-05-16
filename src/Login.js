import React from "react";
import "./Login.css";
import { login_url } from "./spotify";




function Login() {
        return (
          <div className="login-button">
            <img
              src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
              alt="Spotify logo"
            />
            <a href={login_url}>LOGIN</a>
          </div>
        );
      }
      



export default Login;