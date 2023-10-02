
import './App.css'
import { Theme, Button } from 'react-daisyui'
import MyNavbar from './components/MyNavbar';


function App() {
 

  return (
    <>
    <Theme dataTheme="bumblebee">
        <Button color="primary">Click me, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Click me, light!</Button>
      </Theme>
      <MyNavbar/>
      
    </>
  )
}

export default App
