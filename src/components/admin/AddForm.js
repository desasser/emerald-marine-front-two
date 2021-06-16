import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddForm = ({section, message, fields, handleAddFormChange, addMe, updateMe}) => {
    return (
        <div>
            <h1>Add to {section}</h1>
            <h3>{message}</h3>
            <br/>
            {fields.map(field => 
                <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} InputLabelProps={{ shrink: true }} onChange={handleAddFormChange} value={field.content} name={field.name} variant="outlined"></TextField>
                )}
            <br/>
            <Button variant="contained" onClick={addMe}>Add to {section}</Button>
            <Button variant="contained" onClick={updateMe}>Update {section}</Button>
        </div>
    )
}

export default AddForm;