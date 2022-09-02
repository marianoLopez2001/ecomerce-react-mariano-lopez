import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ItemDetail(props) {
    return (
        <Card sx={{ maxWidth: 145 }}>
            <CardMedia
                component="img"
                alt={props.props.description}
                height="200"
                image={props.props.image}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.props.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained">Agregar Al Carrito</Button>
            </CardActions>
        </Card>
    );
}
