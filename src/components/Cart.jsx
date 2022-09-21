import RenderCart from "./RenderCart"
import * as React from 'react';
import { context } from "./Context"
import { useContext } from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

export default function Cart() {

  const { cart, despejarCarrito, agregarCartTotal } = useContext(context)

  return (
    <>
      <h2 style={{ textAlign: "center", paddingTop: "1rem" }}>Carrito</h2>

      {cart.length === 0 ?
        <div style={{ textAlign: "center" }}>
          <p>Su carrito esta vacio</p>
          <p>Desea volver a productos?</p>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Button style={{ margin: "1rem" }} variant='contained'>Volver a productos</Button>
          </Link>
        </div>
        : <div style={{ textAlign: "center" }}>
          <p style={{ padding: "1rem" }}>Total a pagar : ${agregarCartTotal()}</p>
          <Button onClick={despejarCarrito} variant='contained'>Clear</Button>
          <Link to={'/payment'}>
            <Button variant='contained'>Terminar Compra</Button>
          </Link>
        </div>}

      <div className='productContainer'>
        {cart.map((i) => {
          return (
            <RenderCart key={i.id} i={i} />
          )
        })}
      </div>
    </>
  )
}
