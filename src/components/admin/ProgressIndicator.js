import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProgressIndicator = ({open, severity, message, handleClose}) => {
    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
            {message}
        </Alert>
    </Snackbar>
    )
}

export default ProgressIndicator;