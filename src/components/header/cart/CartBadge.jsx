import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartBadge = () => {
    return (
        <React.Fragment>
            <a href="">
                <Badge badgeContent={4} color="primary"
                    sx={{
                        "& .MuiBadge-badge": {
                            color: "#white",
                            backgroundColor: "#ed71a3",
                            minWidth: 15,
                            height: 15
                        },
                        "& svg": {
                            fontSize: 20
                        }
                    }}>
                    <ShoppingCartIcon color="action" sx={{

                    }} />
                </Badge>
            </a>

        </React.Fragment>
    )
}

export default CartBadge
