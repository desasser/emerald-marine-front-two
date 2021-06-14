import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddForm = ({section, fields, handleAddFormChange, addMe}) => {
    return (
        <div>
            <h1>Add to {section}</h1>
            <br/>
            {fields.map(field => 
                <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} onChange={handleAddFormChange} name={field.name} variant="outlined"></TextField>
                )}
            <br/>
            <Button variant="contained" onClick={addMe}>Add to {section}</Button>
        </div>
    )
}

export default AddForm;