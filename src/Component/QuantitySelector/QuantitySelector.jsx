import React, { useState } from "react";
import { IconButton, TextField } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import "./quantitySelector.css"; // Import the CSS file

const QuantitySelector = ({ stock = 10 }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        if (quantity < stock) setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    return (
        <div className="quantity-container">
            <IconButton onClick={handleDecrease} color="primary" disabled={quantity <= 1}>
                <RemoveCircleOutlineIcon />
            </IconButton>

            <TextField
                type="number"
                value={quantity}
                inputProps={{ min: 1, max: stock, className: "quantity-input" }}
                onChange={(e) => {
                    let value = parseInt(e.target.value, 10);
                    if (value >= 1 && value <= stock) setQuantity(value);
                }}
                size="small"
                className="quantity-input"
            />

            <IconButton onClick={handleIncrease} color="primary" disabled={quantity >= stock}>
                <AddCircleOutlineIcon />
            </IconButton>
        </div>
    );
};

export default QuantitySelector;
