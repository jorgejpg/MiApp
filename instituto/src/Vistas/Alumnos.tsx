import IMatricula from "../Model/IAlumno";
import {useEffect, useState} from "react";
import axios from 'axios';
import url from "../Utils/UrlApi";
import AlumnoCard from '../componentes/AlumnoCard';
import {useNavigate} from "react-router-dom";

export default function Alumnos(){

    let navigate = useNavigate();
    interface IState{alumnos: Array<IMatricula>};

    const [stalumno, setStAlumno] =  useState<IState>();

    async function getAllAlumnos() {
        let {data} = await axios.get(url() + "/alumnos");
        let arrayAlumnos: Array<IMatricula> = data;
        setStAlumno({alumnos: arrayAlumnos});
    }

    useEffect(
        () => {
            getAllAlumnos();
        },
        [stalumno]
    );
    
    const clickAdd = () => {
        let ruta = "/alumnosadd";
        navigate(ruta);
    }

    return(
        <>
        <h1>Alumnos</h1>
        <button onClick={clickAdd}>Agregar</button>
        <div>
            {stalumno?.alumnos.map((alumno) => <AlumnoCard alumno={alumno}/>)}
            
        </div>
        
        </>
    );
}
