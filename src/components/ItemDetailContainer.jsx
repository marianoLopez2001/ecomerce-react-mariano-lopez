import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [mostrarDetalleProducto, setMostrarDetalleProducto] = useState([])
    const { idproduct } = useParams()

    useEffect(()=> {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then((res) => {setMostrarDetalleProducto(res.find((i) => i.id === idproduct))})
        
    }, [idproduct])

    return (
        <>
        <p>ItemDetailContainer</p>
            <ItemDetail mostrarDetalleProducto={mostrarDetalleProducto}/>
        </>
    )
}

export default ItemDetailContainer
