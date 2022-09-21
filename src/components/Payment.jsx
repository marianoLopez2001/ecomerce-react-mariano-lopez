import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from './Context'

const Payment = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState("")
    const [buy, setBuy] = useState(false)
    const { cart, agregarCartTotal } = useContext(context)

    const terminarCompra = () => {

        if (buy) {
            return
        }

        let order = {
            buyer: {
                name,
                phone,
                mail,
            },
            items: cart.map((i) => ({
                id: i.id,
                title: i.title,
                price: i.price,
                quantity: i.quantity,
            })),
            total: agregarCartTotal(),
        };
        const db = getFirestore()
        const miColleccion = collection(db, 'orders');
        addDoc(miColleccion, order)
            .then((query) => {
                setOrderId(query.id);
                console.log(query.id);
                setBuy(true)
            })
    }

    return (<>
        <p>Su ID de compra: {orderId}</p>
        <p>{name}</p>
        <p>{mail}</p>
        <p>{phone}</p>
        <div>
            <input type="text" target={name} onChange={(e) => { setName(e.target.value) }} placeholder='nombre' />
            <br />
            <input type="email" target={mail} onChange={(e) => { setPhone(e.target.value) }} placeholder='mail' />
            <br />
            <input type="tel" target={phone} onChange={(e) => { setMail(e.target.value) }} placeholder='telefono' />
            <br />
            <button onClick={() => terminarCompra()}>Comprar</button>
        </div>
    </>
    )
}

export default Payment