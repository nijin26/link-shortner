import React from "react";
import firebase from "../../../utils/firebase";
import { useHistory, withRouter } from "react-router-dom";

import { FaGoogle } from "react-icons/all";

const Google = () => {
  const history = useHistory();

  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;
        console.log(credential);
        history.push("/");

        // // This gives you a Google Access Token. You can use it to access the Google API.
        // var token = credential.accessToken;
        // // The signed-in user info.
        // var user = result.user;
        // // ...
      })
      .catch((err) => {
        // var errorCode = error.code;
        // var errorMessage = error.message;
        // // The email of the user's account used.
        // var email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
      });
  };

  return (
    <div onClick={handleSignIn} style={{ cursor: "pointer" }}>
      <FaGoogle size={28} />
    </div>
  );
};

export default withRouter(Google);
