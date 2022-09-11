import {useState} from 'react'
import Mensaje from './Mensaje'

export const NuevoPresupuesto = ({
                  presupuesto,
                  setPresupuesto,
                  setIsValidPresupuesto
                }) => {
  const[mensaje,setMensaje]=useState("")

  const handlerPresupuesto = (e) =>{
      e.preventDefault();
      if(!presupuesto || presupuesto <0){
        setMensaje("Porfavor Ingresa un presupuesto valido")
        return
      }
      setMensaje("")
      setIsValidPresupuesto(true)
  }
  return (
    <div className="contenedor-presupuesto contenedor sombra">
        <form onSubmit={handlerPresupuesto} className="formulario">
            <div className="campo">
                <label>Define Tu Presupuesto</label>
                <input className="nuevo-presupuesto" type="number" placeholder="Añade un presupuesto" 
                       value={presupuesto} onChange={e =>setPresupuesto(Number(e.target.value))}>
                </input>
            </div>
            <input type="submit" value="Añadir"></input>
            {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        </form>
    </div>
  )
}
