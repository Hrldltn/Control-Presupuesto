import {useState,useEffect} from 'react'

export const Filtros = ({filtro,setFiltro}) => {
  return (
    <div className="filtros sombra contenedor"> 
        <form>
            <div className="campo">
                <label>Filtrar Gastos</label>
                <select value={filtro} onChange={e=>setFiltro(e.target.value)}>
                        <option value="">--Todos los gastos--</option>
                        <option value="casa">Gastos Comunes</option>
                        <option value="salud">Salud</option>
                        <option value="comida">Comida</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="ocio">Tarjetas</option>
                </select>
            </div>
        </form>
    </div>
  )
}
