import './Style/App.css'
import HomePage from './Componenets/HomePage'
import { NewsProvider } from './Context/NewsProvider'
function App() {
   

  return (
    <>
    <NewsProvider>
      <HomePage/>
      </NewsProvider>
    </>
  )
}

export default App
