import './App.css'
import NavBarComponent from './components/NavBarComponent'

function App() {

  return (
    <>
      <div className='container'>
        <NavBarComponent/>
        <h1>MERN STACK | Workshop</h1>
        <a className='btn btn-primary' href='/create'>Compose Blog</a>
      </div>
    </>
  )
}

export default App
