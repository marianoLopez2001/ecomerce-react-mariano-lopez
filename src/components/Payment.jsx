import { addDoc, collection, getFirestore } from 'firebase/firestore'
import React, { useState } from 'react'
import { useContext } from 'react'
import { context } from './Context'
import { Box, Typography, Button } from '@mui/material'

const Payment = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [phone, setPhone] = useState('')
    const [orderId, setOrderId] = useState("")
    const [lastName, setLastName] = useState("")
    const [expirationDateMonth, setExpirationDateMonth] = React.useState("Enero");
    const [expirationDateYear, setExpirationDateYear] = React.useState("2022");
    const [card, setCard] = useState("")
    const [codeCVV, setCodeCVV] = useState("")
    const [discountCode, setDiscountCode] = useState("")

    const { cart, setCart, agregarCartTotal } = useContext(context)

    const terminarCompra = (e) => {

        e.preventDefault();

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
                setCart([]);
            })
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #9c27b0',
        boxShadow: 24,
        borderRadius: 2,
        p: 4,
    };

    return (
        <>
            {!orderId ?
                <div className='formContainer'>
                    <p style={{ marginBottom: '2rem' }}>Formulario de compra</p>
                    <form onSubmit={(e) => { terminarCompra(e) }}>
                        <div className='innerFormContainer' >
                            <div>
                                <input required value={name} onChange={(e) => { setName(e.target.value) }} minLength="3" pattern="[a-zA-Z]+" maxLength="20" type="text" placeholder='Nombre' />
                                <input required value={lastName} onChange={(e) => { setLastName(e.target.value) }} minLength="3" pattern="[a-zA-Z]+" maxLength="20" type="text" placeholder='Apellido' />
                                <input required value={phone} onChange={(e) => { setPhone(e.target.value) }} minLength="8" pattern="^\d+$" maxLength='13' type="tel" placeholder='015-1234-5678' />
                                <input required value={mail} onChange={(e) => { setMail(e.target.value) }} type="email" placeholder='Email' />
                            </div>
                            <div>
                                <input required value={card} onChange={(e) => { setCard(e.target.value) }} minLength="16" pattern="^\d+$" type="text" maxLength="16" placeholder='Número de tarjeta' />
                                <select value={expirationDateMonth} onChange={(e) => { setExpirationDateMonth(e.target.value) }}>
                                    <option value="Enero">Enero</option>
                                    <option value="Febrero">Febrero</option>
                                    <option value="Marzo">Marzo</option>
                                    <option value="Abril">Abril</option>
                                    <option value="Mayo">Mayo</option>
                                    <option value="Junio">Junio</option>
                                    <option value="Julio">Julio</option>
                                    <option value="Agosto">Agosto</option>
                                    <option value="Septiembre">Septiembre</option>
                                    <option value="Octubre">Octubre</option>
                                    <option value="Noviembre">Noviembre</option>
                                    <option value="Diciembre">Diciembre</option>
                                </select>
                                <select value={expirationDateYear} onChange={(e) => { setExpirationDateYear(e.target.value) }}>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                                    <option value="2025">2025</option>
                                    <option value="2026">2026</option>
                                    <option value="2027">2027</option>
                                </select>
                                <input required value={codeCVV} onChange={(e) => { setCodeCVV(e.target.value) }} pattern="^\d+$" type="text" minLength="3" maxLength="4" placeholder='CVV' />
                                <input value={discountCode} onChange={(e) => { setDiscountCode(e.target.value) }} type="text" placeholder='Codigo de descuento' />
                            </div>
                        </div>
                        <Button style={{marginTop:"1rem"}} type='submit' variant='contained' color='secondary'>Terminar Compra</Button>
                    </form>
                </div>
                :
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Gracias por su compra {name}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        Su id de compra es {orderId}
                    </Typography>
                </Box>
            }
        </>
    )
}

export default Payment