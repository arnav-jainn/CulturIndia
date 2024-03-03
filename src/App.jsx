import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home'
import SignupPage from './Pages/SignupPage'
import Discussion from './Pages/Discussion'
import EventsPage from './Pages/EventsPage'
import ContactUsPage from './Pages/ContactUsPage'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route index path='/' element={<Home/>}></Route>
    <Route  path='/SignUp' element={<SignupPage/>}></Route>
    <Route  path='/Discussion' element={<Discussion/>}></Route>
    <Route  path='/Events' element={<EventsPage/>}></Route>
    <Route  path='/ContactUs' element={<ContactUsPage/>}></Route>


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
