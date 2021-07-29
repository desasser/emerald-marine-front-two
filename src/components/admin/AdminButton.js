import React from "react";
import Button from '@material-ui/core/Button';

const AdminButton = ({ handleClick, name, text, color }) => {
  return (
    <div>
      <Button variant="contained" onClick={handleClick} style={{ margin: '5px', backgroundColor: '#f5ed5e', height:'50px', fontSize: '1rem' }} name={name}>{text}</Button>
    </div>
  )

}

export default AdminButton;