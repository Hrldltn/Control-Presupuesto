import React from 'react'
import {
        LeadingActions,
        SwipeableList,
        SwipeableListItem,
        SwipeAction,
        TrailingActions
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

import{formatearFecha} from '../helpers'
import{formateoMoneda} from '../helpers'

import IconoCasa from '../img/icono_casa.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'
import IconoOcio from '../img/icono_ocio.svg'


const diccionarioIconos={
    casa:IconoCasa,
    salud:IconoSalud,
    comida:IconoComida,
    ahorro:IconoAhorro,
    suscripciones:IconoSuscripciones,
    ocio:IconoOcio,
}


export const Gasto = ({gasto , setGastoEditar,eliminarGasto}) => {
    const {categoria,nombre,cantidad,id,fecha}=gasto;

  const leadingActions=()=>(
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )
  
  const trailingActions=()=>(
    <TrailingActions>
      <SwipeAction onClick={() => eliminarGasto(id)} destructive={true}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
        <SwipeableListItem leadingActions={leadingActions() } trailingActions={trailingActions()}>
          <div className="gasto sombra">
              <div className="contenido-gasto">
                  <img src={diccionarioIconos[categoria]} alt="icono-gastos"/>

                  <div className="descripcion-gasto">
                      <p className="categoria">{categoria}</p>
                      <p className="nombre-gasto">{nombre}</p>
                      <p className="fecha-gasto">Agregado el:{""}<span>{formatearFecha(fecha)}</span></p>
                  </div>
              </div>
              <p className="cantidad-gasto">{formateoMoneda(cantidad)}</p>
          </div>
      </SwipeableListItem>
  </SwipeableList>
  )
}
export default Gasto
