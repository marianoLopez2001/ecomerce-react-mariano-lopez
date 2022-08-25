import React, { useState } from "react";
import { Button } from "@mui/material";

export default function ItemCount() {

    const producto1 = { id: 1, stock: 10, initial: 1 }

    const { stock, initial } = producto1

    const [newInitial = initial, setInitial] = useState(initial);

    const sumarCantProducto = () => {
        if (newInitial >= stock) {
            return
        }
        else {
            setInitial(newInitial + 1)
        }
    }

    const restarCantProducto = () => {
        if (newInitial === 1) {
            return
        } else {
            setInitial(newInitial - 1)
        }
    }

    const onAdd = () => {
        alert(`Compraste el producto ${newInitial} veces`)
    }

    return (
        <div className="cardContainer">
            <div className="cardControles">
                <Button onClick={restarCantProducto} variant="contained">-</Button>
                <p>{newInitial}</p>
                <Button onClick={sumarCantProducto} variant="contained">+</Button>
            </div>
            <Button onClick={onAdd} variant="contained">Agregar al carrito</Button>
        </div>
    )
}
