import './Style/App.css'
import './Style/index.css'
import './Style/Responsive.css'
import HomePage from './Componenets/HomePage'
import { NewsProvider } from './Context/NewsProvider'
import AllNewsCategoryPage from './Componenets/AllNewsCategoryPage'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import ContactUs from './Componenets/ContactUs'
import About from './Componenets/About'
import AdminNews from './Componenets/AdminNews'
function App() {
   

  return (
    <>
    <NewsProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/signup' element={ <Signup/>}/>
        <Route path='/about' element={ <About/>}/>
        <Route path='/help' element={ <ContactUs/>}/>
        <Route path='/adminNews' element={ <AdminNews/>}/>
        <Route path='/AllNewsCategoryPage/:Category' element={ <AllNewsCategoryPage/>}/>
     
      </Routes>
      </BrowserRouter>
      </NewsProvider>
    </>
  )
}

export default App
