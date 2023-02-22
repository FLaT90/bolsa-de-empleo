import React, { useState, useEffect } from "react";
import axios from 'axios'; // Importa la librería Axios para hacer llamadas HTTP
import '../App.css';

import CiudadanoList from "./CiudadanoList"; // Importa el componente CiudadanoList
import CiudadanoForm from "./CiudadanoForm"; // Importa el componente CiudadanoForm

const Ciuddadanos = () => {
  const [ciudadanos, setCiudadanos] = useState([]); // Declara el estado 'ciudadanos' y su función para modificarlo

  useEffect(() => {
    actualizarCiudadanos();
  }, []);

  // Función que hace una petición GET para obtener los ciudadanos de la API
  const actualizarCiudadanos = () => {
    axios.get("http://localhost:8082/ciudadanos").then((response) => {
      const newCiudadanos = response.data; // Almacena la respuesta de la API en la variable 'newCiudadanos'
      setCiudadanos(newCiudadanos); // Actualiza el estado 'ciudadanos' con los datos obtenidos de la API
    }).catch(error => console.log(error));
  }

  // Función que hace una petición DELETE para eliminar un ciudadano de la API
  const eliminarCiudadano = (id) => {
    axios.delete(`http://localhost:8082/ciudadanos/${id}`)
      .then(response => {
        // Eliminar el ciudadano de la lista
        const nuevosCiudadanos = ciudadanos.filter(ciudadano => ciudadano.id !== id);
        setCiudadanos(nuevosCiudadanos); // Actualiza el estado 'ciudadanos' eliminando el ciudadano que se eliminó de la API
      })
      .catch(error => console.log(error));
  }
  
  // Función que hace una petición POST para agregar un nuevo ciudadano a la API
  const addNewCiudadano = (data) => {
    axios.post('http://localhost:8082/ciudadanos', data)
      .then(response => {
        const nuevoCiudadano = response.data; // Almacena la respuesta de la API en la variable 'nuevoCiudadano'
        setCiudadanos([...ciudadanos, nuevoCiudadano]); // Actualiza el estado 'ciudadanos' agregando el nuevo ciudadano obtenido de la API
      })
      .catch(error => console.log(error));
  }

  // Retorna el componente con los dos componentes hijos CiudadanoForm y CiudadanoList
  return (
    <div className="contenedor-padre">
      <CiudadanoForm addNewCiudadano={addNewCiudadano}/>
      <CiudadanoList ciudadanos={ciudadanos} eliminarCiudadano={eliminarCiudadano}/>
    </div>
  )
}

export default Ciuddadanos;
