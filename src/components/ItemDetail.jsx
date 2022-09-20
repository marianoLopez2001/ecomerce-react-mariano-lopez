import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ItemCount from './ItemCount';
import { context } from "./Context"
import { useContext } from 'react';
import { useState } from 'react';

export default function ItemDetail({ mostrarDetalleProducto }) {

    const { agregarAlCarrito } = useContext(context)

    const { id, description, image, title, price } = mostrarDetalleProducto

    const [mostrarComponente, setMostrarComponente] = useState(true);

    const onAdd = (newInitial) => {
        setMostrarComponente(false);
        const objetoAgregado = { id, title, image, price, quantity: newInitial };
        agregarAlCarrito(objetoAgregado, newInitial);
    }

    return (
        <>
            <Card sx={{ maxWidth: 145 }}>
                <CardMedia
                    component="img"
                    alt={description}
                    height="200"
                    image={image}
                />
                <CardContent>

                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ItemCount mostrarComponente={mostrarComponente} onAdd={(newInitial) => { onAdd(newInitial) }} />
                </CardActions>
            </Card>
        </>
    );
}
