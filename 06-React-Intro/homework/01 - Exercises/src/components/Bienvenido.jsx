import Renderer from "markdown-it/lib/renderer";
import React from "react";
import Botones from "./Botone"

const studentName = "Brian ";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
        <h1>Homework</h1>
        <h3>{studentName}</h3>
        <ul>
          {techSkills.map((valor,indice) => <li key = {indice}>{valor}</li>)}
        </ul>
        <Botones alerts={alerts}/> 
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
