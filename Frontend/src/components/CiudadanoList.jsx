import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import '../App.css';
import axios from 'axios';

function CiudadanoList({ciudadanos, eliminarCiudadano}) {

  return (
    <div >
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Tipo de Documento</TableCell>
              <TableCell>Cédula</TableCell>
              <TableCell>Nombres</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Fecha de Nacimiento</TableCell>
              <TableCell>Profesión</TableCell>
              <TableCell>Aspiración Salarial</TableCell>
              <TableCell>Correo Electrónico</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ciudadanos.map((ciudadano) => (
              <TableRow key={ciudadano.id}>
                <TableCell>{ciudadano.id}</TableCell>
                <TableCell>{ciudadano.tipoDocumento}</TableCell>
                <TableCell>{ciudadano.cedula}</TableCell>
                <TableCell>{ciudadano.nombres}</TableCell>
                <TableCell>{ciudadano.apellidos}</TableCell>
                <TableCell>{ciudadano.fechaNacimiento}</TableCell>
                <TableCell>{ciudadano.profesion}</TableCell>
                <TableCell>{ciudadano.aspiracionSalarial}</TableCell>
                <TableCell>{ciudadano.correoElectronico}</TableCell>
                <TableCell>
                  <Button onClick={() => eliminarCiudadano(ciudadano.id)} variant="contained" color="secondary">
                    Eliminar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default CiudadanoList;
