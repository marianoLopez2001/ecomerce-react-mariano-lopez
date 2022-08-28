import Item from "./Item"

//FUNCION QUE CONVIERTE EL CATALOGO DENTRO DEL OBJ "PRODUCTOS" PASADO POR PROPS, LO MAPEA Y ME DEVUELVE UN COMPONENTE ITEM

function ItemList(productos) {

    const newProducto = Object.values(productos)

    return (
        <div>
            {newProducto[0].map((i) => {
                return <Item key={i.id} id={i.id} nombre={i.nombre} precio={i.precio}/>
            })}
        </div>
    )
}

export default ItemList
