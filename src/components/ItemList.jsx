import Item from "./Item"

//FUNCION QUE CONVIERTE EL CATALOGO DENTRO DEL OBJ "PRODUCTOS" PASADO POR PROPS, LO MAPEA Y ME DEVUELVE UN COMPONENTE ITEM

function ItemList(productos) {

    const newProductos = Object.values(productos)

    return (
        <div className="ItemListContainer">
            {newProductos[0].map((i) => {
                return <Item key={i.id} id={i.id} image={i.image} title={i.title} price={i.price} description={i.description} category={i.category} />
            })}
        </div>
    )
}

export default ItemList
