
import React from 'react'
import axios from 'axios';
import UrlApi from '../Utils/UrlApi';
import { useNavigate } from "react-router-dom";
import IAsignatura from '../Model/IAsignatura';
import {useEffect, useState} from "react";
import url from "../Utils/UrlApi";

interface IState{asignatura: IAsignatura};
interface IProps{id: string};

export default function UpdateAsignatura(props: IProps) {

let navigate = useNavigate();

const [stasignatura, setStAsignatura] =  useState<IState>();

async function getAsignaturas() {
    let {data} = await axios.get(url() + "/asignatura/" + props.id);
    let asignatura: IAsignatura = data;
    setStAsignatura({asignatura: asignatura});
}

useEffect(
    () => {
        getAsignaturas();
    },
    []
);

function cargarDatos(){

}

function updAsignatura(event: React.FormEvent<HTMLFormElement>) {
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
            <form onSubmit={updAsignatura}>
                Nombre: <input type="text" name="nombre" /><br />
                Curso: <input type="text" id="curso" /> <br />
                <button type="submit">Crear </button>
            </form>
        </div>
    </>
)
}