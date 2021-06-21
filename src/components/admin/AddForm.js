import React from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import UploadWidget from './UploadWidget';

const AddForm = ({section, message, fields, handleAddFormChange, addMe, updateMe}) => {
    return (
        <div style={{'display': 'flex', 'flex-direction': 'column'}}>
            <h1>Add to {section}</h1>
            <h3>{message}</h3>
            <br/>
            {fields.map(field => 
                <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} InputLabelProps={{ shrink: true }} onChange={handleAddFormChange} value={field.content} name={field.name} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
                )}
            <br/>
            <div style={{'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-between'}}>
            {section==='Products' || section==='Press Releases' || section==='Blog' ? 
            <UploadWidget/> :
            <></>}
            <Button size='small' style={{'padding': '0', 'max-width': '30%'}} variant="contained" onClick={addMe}>Add to {section}</Button>
            <Button size='small' style={{'padding': '0', 'max-width': '30%'}} variant="contained" onClick={updateMe}>Update {section}</Button>
            </div>
        </div>
    )
}

export default AddForm;