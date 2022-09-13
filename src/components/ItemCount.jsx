import React, { useState } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom"

export default function ItemCount(props) {

    const { onAdd, mostrarComponente } = props
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

    return (
        <>
            <div className={mostrarComponente ? "cardContainer" : "noMostrar"}>
                <div className="cardControles">
                    <Button className="btnCardCount" onClick={restarCantProducto} variant="contained">-</Button>
                    <p>{newInitial}</p>
                    <Button className="btnCardCount" onClick={sumarCantProducto} variant="contained">+</Button>
                </div>
                <Button className="btnCardCount" onClick={() => onAdd(newInitial)} variant="contained">Agregar al carrito</Button>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <Link to={"/cart"} className={!mostrarComponente ? "mostrar" : null} >
                    <Button style={{ marginBottom: "1rem", margin: "auto" }} variant="contained">Ir Al Carro</Button>
                </Link>
                <Link to={"/"} style={{ margin: "auto" }} className={!mostrarComponente ? "mostrar" : null} >
                    <Button variant="contained">Seguir Comprando</Button>
                </Link>
            </div>
        </>
    )
}
