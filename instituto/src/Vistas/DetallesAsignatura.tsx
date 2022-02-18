import { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import url from "../Utils/UrlApi";
import axios from 'axios';
import IAsignatura from '../Model/IAsignatura';


interface IState {asignatura?: IAsignatura}

export default function DetallesAlumno(){

    const [stasignatura, setStAsignatura] =  useState<IState>({}); 
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        const selectAsignatura = async (id:string | undefined) => {
            let {data} = await axios.get(url() + "/asignaturas/" + id);
            let asignatura =  data;
            setStAsignatura({asignatura: asignatura});
        }
        selectAsignatura(id);
    },[id])

    const clickDelete = () => {
        async function deleteAsignatura() {
            try {
                await axios.delete(url() + "/asignaturas/" + stasignatura.asignatura?.idasignatura);
            } catch (error) {
                console.log(error);
            }
        }
        deleteAsignatura();
        navigate("/asignaturas");
    }

    const clickUpd = () => {
        let ruta = "/alumnosadd";
        navigate(ruta);
    }

    

    return(
        <>
        <div >
               <p>
               {stasignatura.asignatura?.nombre}&nbsp;Curso:{stasignatura.asignatura?.curso}
               </p>
               <button onClick={clickDelete}>Eliminar</button>&nbsp;
               <button onClick={clickUpd}>Actualizar</button>
        </div>    
        </>
    )
} 