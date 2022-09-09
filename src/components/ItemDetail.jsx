import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail({mostrarDetalleProducto}) {

    function agregarAlCarrito(newInitial) {
        console.log("Acabo de recibir " + newInitial);
    }

    return (
        <>
            <Card sx={{ maxWidth: 145 }}>
                <CardMedia
                    component="img"
                    alt={mostrarDetalleProducto.description}
                    height="200"
                    image={mostrarDetalleProducto.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {mostrarDetalleProducto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {mostrarDetalleProducto.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {mostrarDetalleProducto.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ItemCount agregarAlCarrito={(newInitial) => {agregarAlCarrito(newInitial)}} />
                </CardActions>
            </Card>
        </>
    );
}
