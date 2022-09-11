import {useState,useEffect} from 'react'
import {formateoMoneda} from '../helpers'
import {CircularProgressbar,buildStyles} from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

const ControlPresupuesto = ({gastos,presupuesto,setGastos,setPresupuesto,setIsValidPresupuesto}) => {

  const [porcentaje,setPorcentaje]=useState(0)
  const[disponible,setDisponible]=useState(0)
  const[gastado,setGastado]=useState(0)
  useEffect(()=>{
    const totalGastado = gastos.reduce((total,gasto )=> gasto.cantidad + total,0 )
    const totalDisponible=  presupuesto - totalGastado
      //porcentaje
    const nuevoPörcentaje=(((presupuesto - totalDisponible)/presupuesto)*100).toFixed(2)
    

    setDisponible(totalDisponible)
    setGastado(totalGastado)
    setTimeout(()=>{
      setPorcentaje(nuevoPörcentaje)
    }, 1000)
  },[gastos])

  const handleResetApp = () =>{
      const resultado = confirm('¿Deseas Reiniciar la app?')

      if(resultado){
        setGastos([])
        setPresupuesto(0)
        setIsValidPresupuesto(false)
      }
      

  }
    
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
        <div>
            <CircularProgressbar
              styles={buildStyles({
                  pathColor: porcentaje > 100 ? '#DC2626' : '#3b82F6',
                  trailColor:'#8C8C8C',
                  textColor: porcentaje > 100 ? '#DC2626' : '#3b82F6',
              })}
              value={porcentaje}
              text={`${porcentaje} % Gastados`}
            />
        </div>
        <div className="contenido-presupuesto">
            <button className="reset-app" type="button" onClick={handleResetApp}>Resetear App</button>
            <p><span>Presupuesto: </span>{formateoMoneda(presupuesto)}</p>
            <p className={`${disponible < 0 ? 'negativo':''}`}><span>Disponible: </span>{formateoMoneda(disponible)}</p>
            <p><span>Utilizado: </span>{formateoMoneda(gastado)}</p>
        </div>
    </div>
  )
}

export default ControlPresupuesto
