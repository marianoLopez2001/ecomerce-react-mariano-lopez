import React, { useState } from 'react'
import { createContext } from 'react'

export const context = createContext()

export default function Context({ children }) {

  const [cart, setCart] = useState([])

  function agregarAlCarrito(item) {

    const existe = cart.find((i) => i.id === item.id)

    if (existe) {
      const newCarrito = cart.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity + item.quantity }
        } else {
          return i
        }
      })
      setCart(newCarrito)
    } else {
      setCart([...cart, item])
    }
  }

  const eliminarDelCarrito = (id) => {

    const item = cart.find((i) => {
      return (i.id === id)
    })

    console.log(cart);

    if (item.quantity === 1) {
      setCart(cart.filter((i) => i.id !== id))
    } else {
      item.quantity-- //NO LO RENDERIZA
    }
  }

  const despejarCarrito = () => {
    setCart([])
  }

  return (
    <context.Provider value={{ cart, setCart, agregarAlCarrito, despejarCarrito, eliminarDelCarrito }}>
      {children}
    </context.Provider>
  )
}

