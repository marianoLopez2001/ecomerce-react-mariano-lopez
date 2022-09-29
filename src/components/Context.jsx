import React, { useState, useEffect } from 'react'
import { createContext } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const context = createContext()

export default function Context({ children }) {

  //ESTADOS GLOBALES

  const [cart, setCart] = useState([])
  const [cartCounter, setCartCounter] = useState(0)

  //FUNCIONES GLOBALES

  const setearCantWidget = () => { setCartCounter(cart.map(item => item.quantity).reduce((prev, curr) => prev + curr, 0)) }

  useEffect(() => {
    setearCantWidget()
  })

  const agregarCartTotal = () => {
    return cart.reduce((acc, i) => acc += i.price * i.quantity, 0)
  }

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
    toast.success('Producto agregado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const eliminarDelCarrito = (id) => {

    const item = cart.find((i) => {
      return (i.id === id)
    })

    if (item.quantity === 1) {
      setCart(cart.filter((i) => i.id !== id));

    } else {
      item.quantity--;
    }
    setearCantWidget();
    toast.error('Producto eliminado!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  const despejarCarrito = () => {
    setCart([]);
  }

  return (
    <context.Provider value={{ cart, setCart, agregarAlCarrito, despejarCarrito, eliminarDelCarrito, agregarCartTotal, setCartCounter, cartCounter }}>
      {children}
    </context.Provider>
  )
}

