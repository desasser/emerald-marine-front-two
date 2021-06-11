import React from "react";
import Button from '@material-ui/core/Button';

const AdminButton = ({handleClick, name, text}) => {
    return (
        <div>
        <Button variant="contained" onClick={handleClick} name={name}>{text}</Button>
        </div>
    )
    
}

export default AdminButton;