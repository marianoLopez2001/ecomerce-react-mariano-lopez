const Item = (i) => {
    return (
        <div key={i.id}>
            <p>{i.id}</p>
            <p>{i.nombre}</p>
            <p>{i.precio}</p>
            <br />
        </div>
    )
}

export default Item