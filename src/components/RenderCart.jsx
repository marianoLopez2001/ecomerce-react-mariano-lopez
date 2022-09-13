import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { context } from './Context';
import { useContext } from 'react';

const RenderCart = ({ i }) => {

    const { eliminarDelCarrito } = useContext(context)

    const { image, description, price, id, quantity, title } = i

    return (
        <Card style={{ display: "flex" }} sx={{ maxWidth: "fitContent" }}>
            <img style={{ margin: "1rem" }} width={150} src={image} alt={description} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Cantidad: {quantity}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    Precio: {price}
                </Typography>
                <Button onClick={() => { eliminarDelCarrito(id, quantity) }} variant="contained" style={{ backgroundColor: "red", marginTop:"1rem" }}>Eliminar Del Carrito</Button>
            </CardContent>
        </Card>
    )
}

export default RenderCart
