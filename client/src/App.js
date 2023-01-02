import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AccountProvide } from "./context/AccountProvide";

function App() {
  const clientId =
    "993133641971-in8laen2m1ktr86lt5pkdo7s869ao85i.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvide>
        <Messenger />
      </AccountProvide>
    </GoogleOAuthProvider>
  );
}

export default App;
