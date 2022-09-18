import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const context = createContext()

export default function Context({ children }) {

  //ESTADOS GLOBALES

  const [cart, setCart] = useState([])
  const [cantState, setCantState] = useState()
  const [cartCounter, setCartCounter] = useState(0)

  //FUNCIONES GLOBALES

  const agregarCartTotal = () => {
    return cart.reduce((acc, i) => acc += i.price * i.quantity, 0)
  }

  function agregarAlCarrito(item) {
    setCantState(item.quantity)
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

    if (item.quantity === 1) {
      setCart(cart.filter((i) => i.id !== id))
    } else {
      setCantState(item.quantity--) 
    }
    console.log(cart);
  }

  const despejarCarrito = () => {
    setCart([])
  }

  useEffect(() => {
    setCartCounter(cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0))
  }, [cart, eliminarDelCarrito])

  return (
    <context.Provider value={{ cart, setCart, agregarAlCarrito, despejarCarrito, eliminarDelCarrito, agregarCartTotal, cantState, setCartCounter, cartCounter }}>
      {children}
    </context.Provider>
  )
}

