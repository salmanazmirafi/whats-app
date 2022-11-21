import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Login from "./account/Login";

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 222px;
  box-shadow: none;
`;
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
`;

function Messenger() {
  return (
    <Component>
      <Header>
        <Toolbar></Toolbar>
      </Header>
      <Login />
    </Component>
  );
}

export default Messenger;
