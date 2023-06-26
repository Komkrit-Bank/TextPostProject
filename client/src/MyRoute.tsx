import {BrowserRouter, Route, Routes} from 'react-router-dom'
import App from './App'
import FormComponent from './components/FormComponent'


const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={App}/>
        <Route path='/create' Component={FormComponent}/>
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoute