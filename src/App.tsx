import './Style/App.css'
import HomePage from './Componenets/HomePage'
import { NewsProvider } from './Context/NewsProvider'
import AllNewsCategoryPage from './Componenets/AllNewsCategoryPage'
import { BrowserRouter, Route , Routes } from 'react-router-dom'
function App() {
   

  return (
    <>
    <NewsProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <HomePage/>}/>
        <Route path='/AllNewsCategoryPage/:Category' element={ <AllNewsCategoryPage/>}/>
     
      </Routes>
      </BrowserRouter>
      </NewsProvider>
    </>
  )
}

export default App
