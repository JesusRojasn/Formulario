import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./Componentes/Boton.jsx";
import Input from "./Componentes/Input.jsx";

function App() {
  const [nombre, setNombre] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="App">
      <h1>Desafio de estados y componentes</h1>
      <Input 
        nombre={nombre} 
        setNombre={setNombre} 
        password={password}
        setPassword={setPassword}
        >
      </Input>
      {password === '252525' &&
        (<Boton></Boton>) 
      }
    </div>
  );
}

export default App;
