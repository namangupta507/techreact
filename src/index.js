import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
const initialOptions = {
  "client-id":"AboYvTlFYjJ_87rECRJGbZLqXNmDebkaqMIFlfzy5isx50yuJSmzG8Ez3u7BTHGaT7tZYOmCaRfzRxhF",
  currency: "USD",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PayPalScriptProvider options={initialOptions}>
  <Auth0Provider
    domain="dev-8p6c8g3ktchsc5w8.us.auth0.com"
    clientId="ZxAImNXeunlwlCD6ocO5NDiNb6HP9Q8N"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
        <App />
  </Auth0Provider>
  </PayPalScriptProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
