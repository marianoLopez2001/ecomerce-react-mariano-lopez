import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useContext } from 'react';
import { context } from './Context';
import {NavLink} from 'react-router-dom'

const CartWidget = () => {

    const { cartCounter } = useContext(context)

    //Contador de productos 

    return (
        <div style={{display:'flex'}}>
            <NavLink to={'/cart'}>
                <ShoppingCartIcon style={{ color: "white" }} />
            </NavLink>
            <p style={{ color: "white" }} >{cartCounter === 0 ? "" : cartCounter}</p>
        </div>
    )
}

export default CartWidget