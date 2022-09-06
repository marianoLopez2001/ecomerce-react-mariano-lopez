import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemDetailContainer = () => {

    const [mostrarProducto, setMostrarProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    const { idcategory } = useParams()

    useEffect(() => {
        setTimeout(() => {
            fetch('https://fakestoreapi.com/products')
                .then(res => res.json())
                .then((res) => {

                    if (idcategory) {
                        setMostrarProducto(res.filter((i) => {
                            return (i.category === idcategory)}));
                            setCargando(false)
                    }
                    else {
                        setMostrarProducto(res);
                        setCargando(false)
                    }
                })
        }, 2000);

    }, [idcategory])

    return (
        <>
            <p>{cargando ? "cargando" : "Exito"}</p>
            <div style={{ display: "flex", justifyContent: "evenly", flexDirection: "row", flexWrap: "wrap", gap: "3rem", margin: "2rem" }}>
                <ItemList productos={mostrarProducto} />
            </div>
        </>
    )
}

export default ItemDetailContainer
