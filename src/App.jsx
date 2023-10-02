import "./App.css";
import { Theme, Button } from "react-daisyui";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      <Theme dataTheme="bumblebee">
        <MyNavbar />
      </Theme>
    </>
  );
}

export default App;
