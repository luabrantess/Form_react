import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import One from './pages/Login';
import Two from './pages/Cadastro';

function App(){
  const [login, setLogin] = useState()
  const [cadastro, setCadastro] = useState()
 
  return (
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<One setLogin={setLogin}/>}/> 
              <Route path={"/cadastro"} element={<Two setCadastro={setCadastro}/>}/> 
          </Routes>
      </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<App/>
);