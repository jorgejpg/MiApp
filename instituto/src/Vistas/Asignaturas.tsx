
import {useEffect, useState} from "react";
import axios from 'axios';
import url from "../Utils/UrlApi";
import AsignaturaCard from '../componentes/AsignaturaCard';
import {useNavigate} from "react-router-dom";
import IAsignatura from '../Model/IAsignatura';

export default function Asignaturas(){

    let navigate = useNavigate();
    interface IState{asignaturas: Array<IAsignatura>};

    const [stasignatura, setStAsignatura] =  useState<IState>();

    async function getAllAsignaturas() {
        let {data} = await axios.get(url() + "/asignaturas");
        let arrayAsignaturas: Array<IAsignatura> = data;
        setStAsignatura({asignaturas: arrayAsignaturas});
    }

    useEffect(
        () => {
            getAllAsignaturas();
        },
        []
    );
    
    const clickAdd = () => {
        let ruta = "/asignaturasadd";
        navigate(ruta);
    }

    return(
        <>
        <h1>Alumnos</h1>
        <button onClick={clickAdd}>Agregar</button>
        <div>
            {stasignatura?.asignaturas.map((asignatura) => <AsignaturaCard asignatura={asignatura}/>)}
        </div>
        </>
    );
}