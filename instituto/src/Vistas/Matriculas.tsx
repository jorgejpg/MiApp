import IMatricula from "../Model/IMatricula";
import { useEffect, useState } from "react";
import axios from 'axios';
import url from "../Utils/UrlApi";
import AlumnoCard from '../componentes/AlumnoCard';
import { useNavigate, useParams} from "react-router-dom";

interface IState { matriculas: Array<IMatricula> };
interface IProp { id: string | undefined};


export default function Matriculas(prop: IProp) {

    let navigate = useNavigate();
    let {id} = useParams();


    const [stmatricula, setStmatriculas] = useState<IState>();

    useEffect(() => {

        const selectMatriculas = async (idalumno: string | undefined) => {
            let ruta = url() + "/alumnos/" + idalumno + "/matriculas";
            console.log(ruta);
            let { data } = await axios.get(ruta);
            let arrMatricula: Array<IMatricula> = data;
            setStmatriculas({matriculas: arrMatricula});
        }
        selectMatriculas(id);
    }, []);

    const clickver = () => {
       
        
    }

    const clickborrar = (idmatricula: Number) => {
        const selectMatriculas = async (idalumno: string | undefined, idmatricula: Number) => {
            let ruta = url() + "/alumnos/" + idalumno + "/matriculas/" + idmatricula;
            await axios.delete(ruta);
            
        }
        selectMatriculas(id, idmatricula);
    }

    return (
        <>
            <h1>Matricula</h1>
            <div>
                <table>

                    <tr>
                        <th>Año de matriculación</th>
                        <th>Asignaturas matriculadas</th>
                        <th>Aciones</th>
                    </tr>

                    {stmatricula?.matriculas.map((matricula) =>
                        <tr>
                            <td>{matricula.year}</td>
                            <td>{matricula.asiganturas}</td>
                            <td><button onClick={clickver}>Ver</button></td>
                            <td><button onClick={() => clickborrar(matricula.idmatricula)}>Borrar</button></td>
                        </tr>)
                    }

                </table>
            </div>

        </>
    );
    
}
