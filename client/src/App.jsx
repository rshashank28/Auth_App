import { BrowserRouter ,Routes ,Route } from "react-router-dom"
import SignUp from "./pages/SignUp"
import Profile from "./pages/profile"
import SignIn from "./pages/Signin"
import About from "./pages/About"
import Header from "./components/Header"
export default function App(){
  return<BrowserRouter>
  <Header />
  <Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/about" element={<About />}/>
  <Route path="/sign-up" element={<SignUp />}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/profile" element={<Profile />}/>

  </Routes>
  
  </BrowserRouter>
}