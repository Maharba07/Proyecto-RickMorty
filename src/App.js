import { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import axios from 'axios';
import {Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/about';
import Detail from './components/Detail/Detail';
import Error404 from './components/error404/Error404';
import Form from './components/form/Form';


function App() {
   const navigate = useNavigate();
   const {pathname} = useLocation();
   const [characters, setCharacters] = useState([])
   const [access, setAccess] = useState(false)
    
   const EMAIL = 'maharba0717@gmail.com';
   const PASSWORD = 'Pirulin1';

   function login(userData){
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true)
         navigate('/home')
      }
   }

   useEffect(()=>{
      !access && navigate('/');

   },[access, navigate]);


   function onSearch(id) {

      const repeticion = characters.find((char)=> char.id === parseInt(id))
      if (repeticion){ window.alert (`El personaje con el id ${id} ya fue agregado!`)
      return;

   }

      try {
         
         axios(`https://rickandmortyapi.com/api/character/${id}`)
         .then(({ data }) => {
            
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡Ingresar ID!');
            }
         
         })
         .catch(err => alert(err.response.data.error) )

      } catch (error) {
         
      }

   }

   
   const onClose = (id) => {
      setCharacters((oldChars) => oldChars.filter((char) => char.id !== id));    
   }

   return (
      <div className='App'>
         {pathname !== '/' && <Nav onSearch={onSearch} />}
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path='/home' element={
            <Cards characters={characters} onClose = {onClose} />}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='*' element={<Error404/>}/>
         </Routes>
      </div>
   );
}

export default App;
