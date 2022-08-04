import "./App.css";
import { authProvider } from "./authProvider";
// Docs - https://www.npmjs.com/package/react-aad-msal
import { AzureAD, AuthenticationState } from "react-aad-msal";
function App() {
  return (
    <div className="App">
      <AzureAD provider={authProvider}>
        <span>Whoo, You have authentication</span>
      </AzureAD>

      <AzureAD provider={authProvider} forceLogin={true}>
        {({ login, logout, authenticationState, error, accountInfo }) => {
          // eslint-disable-next-line default-case
          switch (authenticationState) {
            // on success
            case AuthenticationState.Authenticated:
              return (
                <p>
                  <span>Welcome, {accountInfo.account.userName}!</span>
                  <span> You're Awsome</span>
                  {/* <span>{accountInfo.jwtIdToken}</span> */}
                  <button onClick={logout}>Logout</button>
                </p>
              );
            // failed auth
            case AuthenticationState.Unauthenticated:
              return (
                <div>
                  {error && (
                    <p>
                      <span>Oops! An error occured, try again.</span>
                    </p>
                  )}
                  <p>
                    <span>Hey Hacker! You better signup</span>
                    <button onClick={login}>Login</button>
                  </p>
                </div>
              );
            // while process
            case AuthenticationState.InProgress:
              return <p>Authenticating...</p>;
          }
        }}
      </AzureAD>
    </div>
  );
}
export default App;
