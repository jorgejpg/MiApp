import IAsignatura from "./IAsignatura";

export default interface IMatricula{
    idmatricula: Number;
    year: Number;
    asiganturas: Array<IAsignatura> 
}