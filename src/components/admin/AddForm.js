import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const AddForm = ({section, message, fields, handleAddFormChange, addMe, updateMe}) => {
    // const showWidget = (widget) => {
    //     widget.open();
    // }
    // let widget = window.cloudinary.createUploadWidget({
    //     cloudName: 'dccnlakey', 
    //     uploadPreset: 'txcgfxda'}, 
    //     (err, res) => {
    //         if(!err && res && res.event === "success") {
    //             console.log(res.info)
    //         } else {
    //             console.log(err)
    //         }
    //     });

    return (
        <div>
            <h1>Add to {section}</h1>
            <h3>{message}</h3>
            <br/>
            {fields.map(field => 
                <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} InputLabelProps={{ shrink: true }} onChange={handleAddFormChange} value={field.content} name={field.name} variant="outlined"></TextField>
                )}
            <br/>
            {section=='Blog' || section=='Press Releases' || section=='Products' ? 
            <Button variant='contained' id='upload_widget'>Upload Photo</Button> :
            <></>}
            <Button variant="contained" onClick={addMe}>Add to {section}</Button>
            <Button variant="contained" onClick={updateMe}>Update {section}</Button>
        </div>
    )
}

export default AddForm;