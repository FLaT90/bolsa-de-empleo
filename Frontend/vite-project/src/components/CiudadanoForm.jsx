import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';


function CiudadanoForm({addNewCiudadano}) {
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [cedula, setCedula] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [profesion, setProfesion] = useState('');
  const [aspiracionSalarial, setAspiracionSalarial] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      tipoDocumento,
      cedula,
      nombres,
      apellidos,
      fechaNacimiento,
      profesion,
      aspiracionSalarial,
      correoElectronico
    };

    axios.post('http://localhost:8082/ciudadanos', data)
      .then(response => {
        addNewCiudadano(response.data)
      })
      .catch(error => {
        console.log(error);
      });      
  };

  return (
    <form className="content" onSubmit={handleSubmit}>
      <label>
        Tipo de Documento:
        <select value={tipoDocumento} onChange={(event) => setTipoDocumento(event.target.value)}>
          <option value="">Seleccionar...</option>
          <option value="Cédula de Ciudadanía">Cédula de Ciudadanía</option>
          <option value="Cédula de Extranjería">Cédula de Extranjería</option>
          <option value="Pasaporte">Pasaporte</option>
          <option value="Otro">Otro</option>
        </select>
      </label>
      <br />
      <label>
        Cédula:
        <input type="text" value={cedula} onChange={(event) => setCedula(event.target.value)} />
      </label>
      <br />
      <label>
        Nombres:
        <input type="text" value={nombres} onChange={(event) => setNombres(event.target.value)} />
      </label>
      <br />
      <label>
        Apellidos:
        <input type="text" value={apellidos} onChange={(event) => setApellidos(event.target.value)} />
      </label>
      <br />
      <label>
        Fecha de Nacimiento:
        <input type="date" value={fechaNacimiento} onChange={(event) => setFechaNacimiento(event.target.value)} />
      </label>
      <br />
      <label>
        Profesión:
        <input type="text" value={profesion} onChange={(event) => setProfesion(event.target.value)} />
      </label>
      <br />
      <label>
        Aspiración Salarial:
        <input type="text" value={aspiracionSalarial} onChange={(event) => setAspiracionSalarial(event.target.value)} />
      </label>
      <br />
      <label>
        Correo Electrónico:
        <input type="email" value={correoElectronico} onChange={(event) => setCorreoElectronico(event.target.value)} />
      </label>
      <br />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default CiudadanoForm;
