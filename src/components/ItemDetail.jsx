import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import ItemCount from './ItemCount';

export default function ItemDetail(mostrarDetalleProducto) {

    return (
        <>
            <Card sx={{ maxWidth: 145 }}>
                {/* <CardMedia
                    component="img"
                    alt={mostrarDetalleProducto.mostrarDetalleProducto.description}
                    height="200"
                    image={mostrarDetalleProducto.mostrarDetalleProducto.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {mostrarDetalleProducto.mostrarDetalleProducto.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {mostrarDetalleProducto.mostrarDetalleProducto.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {mostrarDetalleProducto.mostrarDetalleProducto.price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <ItemCount/>
                </CardActions> */}
            </Card>
        </>
    );
}
