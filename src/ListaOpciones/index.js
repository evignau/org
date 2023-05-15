import "./ListaOpciones.css"
const ListaOpciones = (props) => {

    

    const manejearCambio = (e) => {
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }


   
   
   
   return <div className="lista-opciones">
        <label>Equipos</label>
        <select value = {props.valor} onChange={manejearCambio}>
            <option value="" disabled defaultValue="" hidden>Selecionar equipo</option>
            { props.equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option>) }
        </select>
    </div>
}

export default ListaOpciones;