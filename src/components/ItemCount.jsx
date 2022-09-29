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
        <div>
            {!mostrarComponente ?
                <div style={{display:'flex', flexDirection:'column'}}>
                    <div className="cardControles">
                        <Button className="btnCardCount" onClick={restarCantProducto} variant="contained" color="secondary">-</Button>
                        <p>{newInitial}</p>
                        <Button className="btnCardCount" onClick={sumarCantProducto} variant="contained" color="secondary">+</Button>
                    </div>
                    <Button className="btnCardCount" onClick={() => onAdd(newInitial)} variant="contained" color="secondary">Agregar al carrito</Button>
                </div>
                :
                <div>
                    <Link to={"/cart"}  >
                        <Button style={{width:'100%', textDecoration:'none', borderRadius:'0'}} variant="contained" color="secondary" >Ir Al Carro</Button>
                    </Link>
                    <Link style={{textDecoration:'none'}} to={"/"} >
                        <Button style={{width:'100%'}} variant="contained" color="secondary">Seguir Comprando</Button>
                    </Link>
                </div>
            }
        </div>
    )
}
