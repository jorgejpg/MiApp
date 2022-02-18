import React from 'react';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import Alumnos from './Vistas/Alumnos';
import Asignaturas from './Vistas/Asignaturas';
import AlumnoDetail from './Vistas/DetalleAlumnos';
import AlumnoAdd from './Vistas/AlumnoAdd';
import AsignaturasAdd from './Vistas/AsignaturasAdd';
import AsignaturaDetail from './Vistas/DetallesAsignatura';
import MatriculaDetail from './Vistas/Detallematricula';
import MatriculaAdd from './Vistas/MatriculaAdd';





function App() {
  return (
    <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={< Alumnos/>} />
                    <Route path="/alumnos" element={< Alumnos/>} />
                    <Route path="/alumnos/:id" element={< AlumnoDetail/>} />
                    <Route path='/alumnosadd' element={<AlumnoAdd />}/>
                    <Route path='/asignaturas' element={<Asignaturas/>}/>
                    <Route path='/asignaturasadd' element={<AsignaturasAdd/>}/>
                    <Route path='/asignatura/:id' element={<AsignaturaDetail/>}/>
                    <Route path='/alumnos/:id/matriculas/:idmatricula' element={<MatriculaDetail/>}/>
                   
                </Routes>
            </BrowserRouter>
  );
}
function Navbar() {
  // visible on every page
  return (
      <nav>
          <Link to="/"> Alumnos </Link> &nbsp;
          <Link to="/asignaturas"> Asignaturas </Link> &nbsp;
      </nav>
  );
}
export default App;



/*
                    <Route path="/alumnos/:dni" element={< AlumnosDatos/>} />
                    <Route path="/alumnos/post" element={< AlumnosAdd/>} />
                    <Route path="/alumnos/:dni/matriculas/:id" element={< MatriculasDatos/>} />
*/