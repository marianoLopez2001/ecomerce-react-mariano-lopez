import { getDocs, getFirestore, collection } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

export const TestProducto = () => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    const db = getFirestore() //CONECTO
    const collectionRef = collection(db, 'productos');
    getDocs(collectionRef).then((res) => {

      let productosLimpios = res.docs.map(i => {
        return ( {...i.data(), id: i.id} ) //EL RETURN DEL MAP SIGNIFICA "ES IGUAL A" O REEMPLAZAR
        //ESTO INSERTA LA PROPIEDAD ID A LOS OBJETOS DENTRO DE MI ARRAY
      })

      setProductos(productosLimpios)

    })
  }, [])

  return (
    <div key={productos.id}>
      {productos.map((i) => {
        return (
          <div>
            <p>{i.id}</p>
            <p>{i.nombre}</p>
            <p>{i.descripcion}</p>
            <p>{i.precio}</p>
            <p>{i.stock}</p>
          </div>
        )
      })}
    </div >
  )
}
