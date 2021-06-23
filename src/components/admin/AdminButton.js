import React from "react";
import Button from '@material-ui/core/Button';

const AdminButton = ({handleClick, name, text, color}) => {
    return (
        <div>
        <Button variant="contained" onClick={handleClick} style={{backgroundColor: `${color}`}} name={name}>{text}</Button>
        </div>
    )
    
}

export default AdminButton;