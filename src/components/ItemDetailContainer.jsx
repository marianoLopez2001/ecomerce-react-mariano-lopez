import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [mostrarDetalleProducto, setMostrarDetalleProducto] = useState([])
    const { idproduct } = useParams()

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((res) => {setMostrarDetalleProducto(res.find((i) => parseInt(i.id) === parseInt(idproduct)))})
        
    }, [idproduct])

    return (
        <div style={{display: "flex", justifyContent: "center", padding: "3rem"}}>
            <ItemDetail mostrarDetalleProducto={mostrarDetalleProducto}/>
        </div>
    )
}

export default ItemDetailContainer
