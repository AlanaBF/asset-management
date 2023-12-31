// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <Auth0Provider
//     domain="dev-dj2chkkyahdjbxdi.uk.auth0.com"
//     clientId="gPFYKRuZ5rl1r9Rt9oUcgFMX9DghloyY"
//     authorizationParams={{ redirect_uri: window.location.origin }}
//   >
//     <App />
//   </Auth0Provider>
// );

import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain={import.meta.env.VITE_APP_AUTH0_DOMAIN}
    clientId={import.meta.env.VITE_APP_AUTH0_CLIENT_ID}
    authorizationParams={{ redirect_uri: window.location.origin }}
  >
    <App />
  </Auth0Provider>
);