import { getFirestore, getDoc, doc } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import { ToastContainer } from 'react-toastify';

const ItemDetailContainer = () => {

    const [mostrarDetalleProducto, setMostrarDetalleProducto] = useState({})
    const { idproduct } = useParams()

    useEffect(() => {

        const db = getFirestore() //CONECTO
        const documentRef = doc(db, 'productos', idproduct);
        getDoc(documentRef)
            .then((res) => {
                setMostrarDetalleProducto({ id: res.id, ...res.data() });
            })

    }, [idproduct])

    return (
        <div style={{ display: "flex", justifyContent: "center", padding: "3rem" }}>
            <ItemDetail mostrarDetalleProducto={mostrarDetalleProducto} />
            <ToastContainer />
        </div>
    )
}

export default ItemDetailContainer
