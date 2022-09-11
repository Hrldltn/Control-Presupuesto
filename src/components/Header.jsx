import React from 'react'
import  {NuevoPresupuesto}  from './NuevoPresupuesto'
import  ControlPresupuesto  from './ControlPresupuesto'
const header = ({
                  gastos,
                  setGastos,
                  presupuesto,
                  setPresupuesto,
                  isValidPresupuesto,
                  setIsValidPresupuesto
                }) => {
  return (
  <div>
    <header>
      <h1>Planificador de Gastos </h1>
      {isValidPresupuesto ? (
          <ControlPresupuesto
            setGastos={setGastos}
            gastos={gastos}
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setIsValidPresupuesto={setIsValidPresupuesto}
          />
      ) : (
        <div className="contenedor2">
          <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          />
        </div>
      )}
    </header>
  </div>
  )
}

export default header
