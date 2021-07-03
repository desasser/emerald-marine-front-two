import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadWidget from './UploadWidget';
import BlogContent from './BlogContent';
import {useSelector} from 'react-redux';
import store from '../../utils/store';
import {fetchBlog} from '../../utils/actions/blogActions';

const AddForm = ({section, message, fields, handleAddFormChange, updateMe, successCallback, failureCallback, show, showForm, postContent, addSection, text}) => {
    return (
        <div>
        {show ? 
        <div style={{'display': 'flex', 'flex-direction': 'column'}}>
        <h3>{message}</h3>
        <br/>
        {fields.map(field => 
            <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} InputLabelProps={{ shrink: true }} onChange={handleAddFormChange} value={field.content} name={field.name} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
            )}
        <br/>
        <div style={{'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-between'}}>
        {section==='Product' || section==='Press Release' || section==='Blog Post' ? 
        <UploadWidget successCallback={successCallback} failureCallback={failureCallback}/> :
        <></>}
        {section==='Blog Post'? 
        <BlogContent postContent={postContent} addSection={addSection} text={text}/> : <></>}
        <Button size='small' varient='contained' style={{'padding': '0', 'max-width': '30%'}} onClick={updateMe}>Submit</Button>
        </div>
    </div> :
    <Button size='small' variant="contained" onClick={showForm} style={{'float': 'right', 'margin-top': '10vh', 'padding': '0', 'max-width': '30%'}}>Add new {section}</Button>}
        </div>
    )
}

export default AddForm;