import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {

    const [mostrarProducto, setMostrarProducto] = useState({})
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products/1')
                .then(res => res.json())
                .then((res) => { setMostrarProducto(res) })
                .then(() => { setCargando(false) })
        }, 2000);
    }, [])

    return (
        <>
            <p>{cargando ? "cargando" : "Exito"}</p>
            <ItemDetail props={mostrarProducto} />
        </>
    )
}

export default ItemDetailContainer
