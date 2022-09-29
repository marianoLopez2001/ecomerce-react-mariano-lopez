import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import { ClipLoader } from "react-spinners";
import { getDocs, getFirestore, collection } from 'firebase/firestore'

const ItemDetailContainer = () => {

    const [mostrarProducto, setMostrarProducto] = useState([])
    const [cargando, setCargando] = useState(true)
    const { idcategory } = useParams()

    useEffect(() => {

        const db = getFirestore() //CONECTO
        const collectionRef = collection(db, 'productos');
        getDocs(collectionRef).then((res) => {

            let productosLimpios = res.docs.map(i => {
                return ({ ...i.data(), id: i.id })
            })

            if (idcategory) {
                setMostrarProducto(productosLimpios.filter((i) => {
                    return (i.category === idcategory)
                }));
                setCargando(false)
            }
            else {
                setMostrarProducto(productosLimpios);
                setCargando(false)
            }
        })
    }, [idcategory])

    return (
        <>
            <ClipLoader color="#9c27b0" cssOverride={{ display: "flex", margin:'auto', alignItems:'center' }} size={100} loading={cargando} />
            <h1 style={{ textAlign: 'center', marginTop: '1rem' }}>{!cargando ? "Productos" : ""}</h1>
            <div className="productContainer">
                <ItemList productos={mostrarProducto} />
            </div>
        </>
    )
}

export default ItemDetailContainer
