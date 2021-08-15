import React from "react";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

import "firebase/app";
import firebase from "firebase/app";
import { auth } from "../firebase";

const Login = () => {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to the Chat!</h2>
        <button
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined />
          Sign In with Google
        </button>
        <br />
        <br />
        <button
          className="login-button fb"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined />
          Sign In with Facebook
        </button>
      </div>
    </div>
  );
};

export default Login;
