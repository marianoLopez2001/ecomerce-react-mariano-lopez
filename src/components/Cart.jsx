import RenderCart from "./RenderCart"
import * as React from 'react';
import { context } from "./Context"
import { useContext } from 'react';
import { Button } from '@mui/material';

export default function Cart() {

  const { cart, despejarCarrito } = useContext(context)

  return (
    <>
      <h2 style={{ textAlign: "center", padding: "1rem" }}>Carrito</h2>
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <Button onClick={despejarCarrito} variant='contained'>Clear</Button>
      </div>
      {cart.length === 0 ? <p style={{ textAlign: "center" }}>Su carrito esta vacio</p> : null}
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
