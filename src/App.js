import './App.css';
import Film from './Components/Film';
import Timer from './Components/Timer';
import Pet from './Components/Pet';
import Profile from './Components/Profile';



import HeaderMenu from './Components/HeaderMenu';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
   <>
      <HeaderMenu/>

      <BrowserRouter >            
         <Routes>
               <Route  exact path ='/' element={<Film/>}></Route>
               <Route  exact path ='/pet' element={<Pet/>}></Route>
               <Route  exact path ='/profile' element={<Profile/>}></Route>
         </Routes>
      </BrowserRouter> 
   </>
  );
}

export default App;
