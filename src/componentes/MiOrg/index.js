import { useState } from "react"
import "./MiOrg.css"
 
const MiOrg = (props) => {
    //Estado - hooks
    //useState
   console.log(props)

    
    // [mostrar,actualizarMostrar] = useState(true)
    // manejarClick = () => {
    //    console.log("Mostrar/Ocultar elemento", !mostrar)
    //    actualizarMostrar(!mostrar)
    //}

    return <section className="orgSection">
        <h3 className="title">Mi organizacion</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg;