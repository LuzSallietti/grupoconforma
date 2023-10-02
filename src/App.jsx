import "./App.css";
import { Theme} from "react-daisyui";
import MyNavbar from "./components/MyNavbar";
import Hero from "./components/Hero";
import About from "./components/About";

function App() {
  return (
    <>
      <Theme dataTheme="bumblebee">
        <MyNavbar />
        <Hero/>
        <About/>
      </Theme>
    </>
  );
}

export default App;
