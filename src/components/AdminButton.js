import React from "react";
import Button from '@material-ui/core/Button';

const AdminButton = ({handleClick, text}) => {
    return (
        <div>
        <Button variant="contained" onClick={handleClick}>{text}</Button>
        </div>
    )
    
}

export default AdminButton;