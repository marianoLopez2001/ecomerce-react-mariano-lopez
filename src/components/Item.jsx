import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import ItemCount from "./ItemCount"

export default function ItemDetail(i) {

    const navegar = useNavigate()

    return (
        <div style={{ border: "1px solid black", borderRadius: "0.4rem", padding: "0.5rem" }}>
            <Card sx={{ maxWidth: 145 }}>
                <CardMedia
                    component="img"
                    alt={i.description}
                    height="200"
                    image={i.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {i.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {i.description}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        {i.price} $
                    </Typography>
                    <Button onClick={() => navegar(`/product/${i.id}`)}>Ver más</Button>
                </CardContent>
                <CardActions>
                    <ItemCount />
                </CardActions>
            </Card>
        </div>
    );
}
