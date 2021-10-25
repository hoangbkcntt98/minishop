import React from 'react'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const CartButton = () => {
    return (
        <React.Fragment>
            <div className="card-button">
                <a href="#">
                    <div className="card-button__icon"><ShoppingCartIcon /></div>
                    <div className="card-button__number">
                        <Badge
                            badgeContent={4}
                            sx={{
                                "& .MuiBadge-badge": {
                                    color: "#ed71a3",
                                    backgroundColor: "white"
                                }
                            }}
                        >
                        </Badge>
                    </div>
                    <div className="card-button__text">Gio hang</div>
                </a>
            </div>
        </React.Fragment>
    )
}

export default CartButton
