import IMatricula from '../Model/IAlumno';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
interface IProps { alumno: IMatricula }
interface IState { alumno: IMatricula }

export default function AlumnoCard(props: IProps) {

    const [stalumno, setStAlumno] = useState<IState>({ alumno: props.alumno });
    let navigate = useNavigate();

    const click = () => {
        let ruta = "/alumnos/" + stalumno.alumno.dni;
        navigate(ruta);
    }


    return (
        <>
            <div onClick={click}>
                <h2>{stalumno.alumno.nombre}</h2>
                <p>
                    Apellidos: {stalumno.alumno.apellidos}<br />
                </p>
            </div>
            
        </>
    )
}


