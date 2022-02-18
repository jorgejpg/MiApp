import React from 'react'
import axios from 'axios';
import UrlApi from '../Utils/UrlApi';
import { useNavigate } from "react-router-dom";


export default function CreateAlumno() {

    let navigate = useNavigate();

    function agegarAlumno(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        let formulario: HTMLFormElement = event.currentTarget;
        let inputnombre: HTMLFormElement = formulario.nombre;
        let inputid: HTMLFormElement = formulario.dni;
        let inputapellidos: HTMLFormElement = formulario.apellidos;
        let inputfecha: HTMLFormElement = formulario.fechanacimiento;
        
        let nombre: string = inputnombre.value;
        let id: string = inputid.value;
        let apelldios: string = inputapellidos.value;
        let fechaux: Date = new Date(inputfecha.value);
        
        let fecha: number = fechaux.getTime();
        
        const newalumno = {
            "dni": id,
            "nombre": nombre,
            "apellidos": apelldios,
            "fechanacimiento": fecha
        };
        
        const axiospost = async (ruta: string) => {
            try {
                const { data } = await axios.post(ruta, newalumno)
                console.log(data);
                navigate("/");
            } catch (error) {
                console.log(error);
            }
        }
        
        axiospost(UrlApi() + "/alumnos");
        
    }
    return (
        <>
            <div>
                <form onSubmit={agegarAlumno}>
                    Dni: <input type="text" id="dni" /> <br />
                    Nombre: <input type="text" name="nombre" /><br />
                    Apellidos: <input type="text" id="apellidos" /> <br />
                    Fecha nacimiento: <input type="text" id="fechanacimiento" placeholder='dd/mm/yy' /> <br />
                    <button type="submit">Crear </button>
                </form>
            </div>
        </>
    )
}