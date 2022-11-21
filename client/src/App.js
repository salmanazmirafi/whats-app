import "./App.css";
import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const clientId =
    "993133641971-in8laen2m1ktr86lt5pkdo7s869ao85i.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>
  );
}

export default App;
