import IMatricula from '../Model/IMatricula';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import url from "../Utils/UrlApi";
import axios from 'axios';


interface IState { matricula?: IMatricula }


export default function DetallesAlumno() {

    const [stmatricula, setStMatricula] = useState<IState>({});

    let navigate = useNavigate();
    let { id } = useParams();
    let { idmatricula } = useParams();



    useEffect(() => {
        const selectMatricula = async (id: string | undefined, idmatricula: string | undefined) => {
            let { data } = await axios.get(url() + "/alumnos/" + id + "/matriculas/" + idmatricula);
            let matricula = data;
            setStMatricula({ matricula: matricula });
        }
        selectMatricula(id, idmatricula);
    }, [id])

    const clickDelete = () => {

        /*async function deleteAlumno() {
            try {
                await axios.delete(url() + "/alumnos/" );
            } catch (error) {
                console.log(error);
            }
            navigate("/");
        }
        deleteAlumno();*/

    }



    return (
        <>
            <div >

                <div>{stmatricula.matricula?.asiganturas.map((matricula) =>
                    <table>

                        <tr>
                            <th>Nombre</th>
                            <th>Curso</th>
                        </tr>


                        <tr>
                            <td>{matricula.nombre}</td>
                            <td>{matricula.curso}</td>
                        </tr>


                    </table>
                )}
                </div>
                <button onClick={clickDelete}>Eliminar</button>

            </div>
        </>
    )
} 