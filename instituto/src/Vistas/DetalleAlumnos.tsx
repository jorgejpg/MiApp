import IMatricula from '../Model/IAlumno';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from "react-router-dom";
import url from "../Utils/UrlApi";
import axios from 'axios';
import UtilsFunction from '../Utils/StringUtils';
import Matriculas from './Matriculas';


interface IState {alumno?: IMatricula}

export default function DetallesAlumno(){

    const [stalumno, setStAlumno] =  useState<IState>({}); 
    let {id} = useParams();
    let navigate = useNavigate();
    
    useEffect(() => {
        const selectAlumno = async (id:string | undefined) => {
            let {data} = await axios.get(url() + "/alumnos/" + id);
            let alumno =  data;
            setStAlumno({alumno: alumno});
        }
        selectAlumno(id);
    },[id])

    const clickDelete = () => {
        async function deleteAlumno() {
            try {
                await axios.delete(url() + "/alumnos/" + stalumno.alumno?.dni);
            } catch (error) {
                console.log(error);
            }
        }
        deleteAlumno();
        navigate("/");
    }

    

    return(
        <>
        <div >
               <h2>{stalumno.alumno?.nombre}&nbsp;{stalumno.alumno?.apellidos}</h2><br />
               <p>
               <h3>DNI: {stalumno.alumno?.dni}</h3><br />
               <h3>Fecha de nacimiento: {UtilsFunction.LongToDate(stalumno.alumno?.fechanacimiento)}</h3>    
               </p>
               <button onClick={clickDelete}>Eliminar</button>
               
        </div> 
        <div>
            <Matriculas id={stalumno.alumno?.dni as string}/> 
        </div>   
        </>
    )
} 