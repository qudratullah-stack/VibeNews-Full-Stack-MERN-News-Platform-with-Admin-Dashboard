import './Style/App.css'
import './Style/Responsive.css'
import HomePage from './Componenets/HomePage'
import { NewsProvider } from './Context/NewsProvider'
import AllNewsCategoryPage from './Componenets/AllNewsCategoryPage'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
import Signup from './Authentication/Signup'
import Login from './Authentication/Login'
import HelpPage from './Componenets/HelpPage'
import About from './Componenets/About'
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
        <Route path='/help' element={ <HelpPage/>}/>
        <Route path='/AllNewsCategoryPage/:Category' element={ <AllNewsCategoryPage/>}/>
     
      </Routes>
      </BrowserRouter>
      </NewsProvider>
    </>
  )
}

export default App
