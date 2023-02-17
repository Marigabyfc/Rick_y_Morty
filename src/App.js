import React from 'react'
import './App.css'
// import Card from './components/Card/Card.jsx'
import Cards from './components/Cards.jsx'
// import SearchBar from './components/SearchBar.jsx'  
import Nav from './components/Nav/Nav'
import "./components/Nav/Navmodule.css"
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'



function App () {

const [characters, setCharacters] = React.useState([])

const location = useLocation()

const navigate = useNavigate();

const [access, setAccess] = React.useState(false)

const username = "mariana@hotmail.com"
const password = "1234567"

React.useEffect(() => {
  !access && navigate('/');
}, [access, navigate]);

function login (userData){
  if (userData.password === password && userData.username === username) {
    setAccess(true);
    navigate('/home'); 
} 
}

const onSearch = (character) => {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then((response) => response.json())
  .then((data) => {
     if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
     } else {
        window.alert('No hay personajes con ese ID');
     }
  });
}

const onClose = (id) =>{
  setCharacters(
    characters.filter(elem => elem.id !== id)
  )
}

 return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname === "/" ? <Form login ={login} /> : <Nav onSearch={onSearch}/>}
      <Routes>
        {/* <Route path= "/" element={<Form/>}/> */}
        <Route path='/home' element={<Cards
          onClose={onClose}
          characters={characters} 
        />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
