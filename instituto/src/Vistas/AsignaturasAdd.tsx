
import React from 'react'
import axios from 'axios';
import UrlApi from '../Utils/UrlApi';
import { useNavigate } from "react-router-dom";



export default function CreateAsignatura() {
let navigate = useNavigate();

function agegarAsignatura(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    let formulario: HTMLFormElement = event.currentTarget;
    let inputnombre: HTMLFormElement = formulario.nombre;
    let inputcurso: HTMLFormElement = formulario.curso;

    
    let nombre: string = inputnombre.value;
    let curso: string = inputcurso.value;

    
    const newasignatura = {
        "idasignatura": null,
        "curso": curso,
        "nombre": nombre
    };
    
    const axiospost = async (ruta: string) => {
        try {
            const { data } = await axios.post(ruta, newasignatura)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    
    axiospost(UrlApi() + "/asignaturas");
    navigate("/");
}
return (
    <>
        <div>
            <form onSubmit={agegarAsignatura}>
                Nombre: <input type="text" name="nombre" /><br />
                Curso: <input type="text" id="curso" /> <br />
                <button type="submit">Crear </button>
            </form>
        </div>
    </>
)
}