import {useState, useEffect} from 'react'
import Mensaje from '/src/components/Mensaje'
import Cerrar from '../img/cerrar.svg'

const Modal = ({setModal,animarModal,setAnimarModal,guardarGasto,gastoEditar,setGastoEditar}) => {

    const [mensaje,setMensaje]=useState('')
    const [nombre,setNombre]=useState('') 
    const [cantidad,setCantidad]=useState('')
    const [categoria,setCategoria]=useState('')
    const [id,setId]=useState('')
    const [fecha,setFecha]=useState('')
    useEffect(()=>{
      if(Object.keys(gastoEditar).length > 0){
        setNombre(gastoEditar.nombre)
        setCantidad(gastoEditar.cantidad)
        setCategoria(gastoEditar.categoria)
        setId(gastoEditar.id)
        setFecha(gastoEditar.fecha)
    }
    },[])

    const ocultarModal=()=>{
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(()=>{
          setModal(false)
        },200);
    }
    const handleSubmit =e =>{
      e.preventDefault();
      if([nombre,cantidad,categoria].includes('')){
          setMensaje('Todos los campos son obligatorios')

          setTimeout(()=>{
            setMensaje('')
          },2000);
          return;
      }
    guardarGasto({nombre,cantidad,categoria,id,fecha})
  }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img src={Cerrar} alt="Cerrar" onClick={ocultarModal}/> 
        </div>
        <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`} onSubmit={handleSubmit}>
            <legend>{gastoEditar.nombre ? "Editar Gasto": 'Nuevo Gasto'}</legend>
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            <div className="campo">
                <label htmlFor="nombre">Nombre del Gasto:</label>
                <input id="nombre" type="text" placeholder="Añade El Gasto a Agregar Ej:Luz" value={nombre} onChange={e=>setNombre(e.target.value)}></input>
            </div>
            <div className="campo">
                <label htmlFor="cantidad">Saldo:</label>
                <input id="cantidad" type="number" placeholder="Saldo del Gasto sin puntos Ej:2000" value={cantidad} onChange={e=>setCantidad(Number(e.target.value))}></input>
            </div>
            <div className="campo">
                  <label htmlFor="categoria">Categoria:</label>
                  <select id="categoria" value={categoria} onChange={e=>setCategoria(e.target.value)}>
                        <option value="" disabled>--Seleccione--</option>
                        <option value="casa">Gastos Comunes</option>
                        <option value="salud">Salud</option>
                        <option value="comida">Comida</option>
                        <option value="ahorro">Ahorros</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="ocio">Tarjetas</option>
                  </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios": 'Añadir Gasto'}/>
        </form>
    </div>
  )
}

export default Modal
