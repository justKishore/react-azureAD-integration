// Docs - https://www.npmjs.com/package/react-aad-msal
import { MsalAuthProvider, LoginType } from "react-aad-msal";

// Msal-Configurations
const config = {
  auth: {
    authority: "https://login.microsoftonline.com/common",
    clientId: "ca373ad2-eccc-4d07-9c64-52123e83933f", //generated in azure app registration
    redirectUri: "http://localhost:3000/callback",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
};

// Authentication Parameters
const authenticationParameters = {
  scopes: ["user.read"],
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + "/auth.html",
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
