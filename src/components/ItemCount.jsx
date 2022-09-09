import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"

export default function ItemCount(props) {

    const {agregarAlCarrito} = props

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
        setMostrarComponente(false);
        agregarAlCarrito(newInitial)
    }

    const [mostrarComponente, setMostrarComponente] = useState(true);

    return (
        <>
            <div className={mostrarComponente ? "cardContainer" : "noMostrar"}>
                <div className="cardControles">
                    <Button className="btnCardCount" onClick={restarCantProducto} variant="contained">-</Button>
                    <p>{newInitial}</p>
                    <Button className="btnCardCount" onClick={sumarCantProducto} variant="contained">+</Button>
                </div>
                <Button className="btnCardCount" onClick={onAdd} variant="contained">Agregar al carrito</Button>
            </div>
            <Link style={{ display: "flex", margin: "auto" }} to={"/cart"} className={!mostrarComponente ? "mostrar" : null} >
                <Button variant="contained">Ir Al Carro</Button>
            </Link>
        </>
    )
}
