import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ItemDetail({i}) {

    const {image, description, price, title, id } = i

    const navegar = useNavigate()

    return (
        <div>
            <Card sx={{ width: 145, height: 'fitContent' }}>
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
                    <Typography variant="h5" color="text.secondary">
                        {price} $
                    </Typography>
                    <Button color="secondary" variant='outlined' onClick={() => navegar(`/product/${id}`)}>Ver más</Button>
                </CardContent>
            </Card>
        </div>
    )
}
