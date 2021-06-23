import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadWidget from './UploadWidget';

const AddForm = ({section, message, fields, handleAddFormChange, addMe, updateMe, successCallback, failureCallback, show, showForm }) => {
    return (
        <div>
        {show ? 
        <div style={{'display': 'flex', 'flex-direction': 'column'}}>
        <h3>{message}</h3>
        <Button size='small' style={{'padding': '0', 'max-width': '30%'}} variant="contained" onClick={addMe}>Add new {section}</Button>
        <br/>
        {fields.map(field => 
            <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} InputLabelProps={{ shrink: true }} onChange={handleAddFormChange} value={field.content} name={field.name} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
            )}
        <br/>
        <div style={{'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-between'}}>
        {section==='Product' || section==='Press Release' || section==='Blog Post' ? 
        <UploadWidget successCallback={successCallback} failureCallback={failureCallback}/> :
        <></>}
        <Button size='small' style={{'padding': '0', 'max-width': '30%'}} variant="contained" onClick={updateMe}>Update {section}</Button>
        </div>
    </div> :
    <Button size='small' style={{'padding': '0', 'max-width': '30%'}} variant="contained" onClick={showForm}>Add new {section}</Button>}
        </div>
    )
}

export default AddForm;