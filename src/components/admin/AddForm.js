import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadWidget from './UploadWidget';
import BlogContent from './BlogContent';
import {useSelector} from 'react-redux';
import store from '../../utils/store';
import DeleteConfirmation from './DeleteConfirmation';

const AddForm = ({section, message, fields, handleAddFormChange, updateMe, successCallback, failureCallback, show, showForm, postContent, text}) => {
    const blogContent = useSelector(state => state.blogContent.blogContent)

    const deleteSection = e => {
        const index = e.currentTarget.getAttribute('data-id');
        const newContent = blogContent.filter(blog => blogContent.indexOf(blog) != index)
        store.dispatch({
            type: 'ADD_CONTENT',
            payload: newContent
          })
    }

    const addSection = () => {
        store.dispatch({
            type: 'ADD_CONTENT',
            payload: [...blogContent, {heading: '', content: ''}]
        })
    }

    return (
        <div>
        {show ? 
        <div style={{'display': 'flex', 'flex-direction': 'column'}}>
        <h3>{message}</h3>
        <br/>
        {fields.map(field => 
            <TextField id="outlined-basic helperText" label={field.name.toUpperCase()} InputLabelProps={{ shrink: true }} onChange={handleAddFormChange} value={field.content} name={field.name} variant="outlined" multiline={true} style={{'margin-bottom': '2vh'}}></TextField>
            )}
        {section==='Blog Post' ? <div>
            <h3>Blog Post Content</h3>
            {blogContent?.map((content, index) =>
            <div> 
            <TextField disabled variant="outlined" multiline={true} label='Heading' style={{'margin-bottom': '2vh', 'margin-top': '4vh', 'width': '100%'}} value={content.heading}></TextField>
            <TextField disabled variant="outlined" multiline={true} label='Content' style={{'margin-bottom': '1vh', 'width': '100%'}} value={content.content}></TextField>
            <BlogContent number={index} postContent={postContent} heading={content.heading} content={content.content} text='Edit This Section'></BlogContent>
            <DeleteConfirmation size='small' variant='contained' style={{'padding': '0', 'max-width': '30%'}} confirm={deleteSection} text={'Delete This Section'} id={index} />
            </div>)}
            <Button variant='contained' style={{'padding': '0', 'max-width': '30%'}} onClick={addSection}>Add A Section</Button></div> : <></>}
        <br/>
        <div style={{'display': 'flex', 'flex-direction': 'row', 'justify-content': 'space-between'}}>
        {section==='Product' || section==='Press Release' || section==='Blog Post' ? 
        <UploadWidget successCallback={successCallback} failureCallback={failureCallback}/> :
        <></>}
        <Button size='small' variant='contained' style={{'padding': '0', 'max-width': '30%'}} onClick={updateMe}>Submit</Button>
        </div>
    </div> :
    <Button size='small' variant="contained" onClick={showForm} style={{'float': 'right', 'margin-top': '10vh', 'padding': '0', 'max-width': '30%'}}>Add new {section}</Button>}
        </div>
    )
}

export default AddForm;