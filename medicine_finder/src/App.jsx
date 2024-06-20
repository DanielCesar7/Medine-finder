import './App.css'
import {useEffect} from 'react';
import Tabla from './Componentes/tabla';
import { useState } from 'react';

function App() {

  const [medicine, setMedicine] = useState([]);

  useEffect(() => {
    fetch("https://api.fda.gov/drug/label.json?limit=1000")
        .then((response) => response.json())
        .then((data) => setMedicine(data.results))
}, [])

  return (
    <>
      <Tabla datos={medicine}></Tabla>
    </>
  )
}

export default App
