import Item from "./Item"

//FUNCION QUE CONVIERTE EL CATALOGO DENTRO DEL OBJ "PRODUCTOS" PASADO POR PROPS, LO MAPEA Y ME DEVUELVE UN COMPONENTE ITEM

function ItemList({productos}) {

    return (
        <div className="ItemListContainer">
            {productos.map((i) => {
                return <Item key={i.id} i={i} />
            })}
        </div>
    )
}

export default ItemList
