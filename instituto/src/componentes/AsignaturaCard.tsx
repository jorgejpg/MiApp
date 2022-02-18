
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
import IAsignatura from '../Model/IAsignatura';
interface IProps {asignatura: IAsignatura}
interface IState {asignatura: IAsignatura}

export default function AlumnoCard(props: IProps){

    const [stasignatura, setStAsignatura] =  useState<IState>({asignatura: props.asignatura}); 
    let navigate = useNavigate();

    const click = () => {
        let ruta = "/asignatura/" + stasignatura.asignatura.idasignatura;
        navigate(ruta);
    }
    

    return(
        <>
        <div onClick={click}>
            <h2>{stasignatura.asignatura.nombre}</h2>
            <p>
                id:{stasignatura.asignatura.idasignatura}&nbsp; Curso: {stasignatura.asignatura.curso}<br/>
            </p>    
        </div>    
        </>
    )
} 