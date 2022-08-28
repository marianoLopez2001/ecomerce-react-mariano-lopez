import { useEffect, useState } from "react"
import Catalogo from "../data/data"
import ItemList from "./ItemList"

//FUNCION QUE CON UNA PROMESA QUE ME DEVUELVE UN CATALOGO Y RENDERIZA EL COMPONENTE LIST ITEM

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState("asd")

    useEffect(() => {

        const promesa = new Promise((res, rej) => {
            setTimeout(() => {
                res(Catalogo)
            }, 2000);
        })

        promesa
            .then((res) => {
                setProductos(res)
                setCargando(false)
            })
    }, [])

    return (
        <div>
            <p>{cargando ? "cargando" : "ya cargó"}</p>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer