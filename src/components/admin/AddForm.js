import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import UploadWidget from './UploadWidget';
import BlogContent from './BlogContent';
import ProductSpecs from './ProductSpecs';
import {useSelector} from 'react-redux';
import store from '../../utils/store';
import DeleteConfirmation from './DeleteConfirmation';

const AddForm = ({section, message, fields, handleAddFormChange, updateMe, successCallback, failureCallback, show, showForm, postContent, text}) => {
    const blogContent = useSelector(state => state.blogContent.blogContent)
    const productSpecs = useSelector(state => state.productSpecs.productSpecs)

    const deleteBlogSection = e => {
        const index = e.currentTarget.getAttribute('data-id');
        const newContent = blogContent.filter(blog => blogContent.indexOf(blog) != index)
        store.dispatch({
            type: 'ADD_CONTENT',
            payload: newContent
          })
    }

    const addBlogSection = () => {
        store.dispatch({
            type: 'ADD_CONTENT',
            payload: [...blogContent, {heading: '', content: ''}]
        })
    }

    const deleteProductSection = e => {
        const index = e.currentTarget.getAttribute('data-id');
        const newSpecs = productSpecs.filter(specs => productSpecs.indexOf(specs) != index)
        store.dispatch({
            type: 'EDIT_SPECS',
            payload: newSpecs
          })
    }

    const addProductSection = () => {
        store.dispatch({
            type: 'EDIT_SPECS',
            payload: [...productSpecs, {heading: '', content: ''}]
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
            <BlogContent number={index} heading={content.heading} content={content.content} text='Edit This Section'/>
            <DeleteConfirmation size='small' variant='contained' style={{'padding': '0', 'max-width': '30%'}} confirm={deleteBlogSection} text={'Delete This Section'} id={index} />
            </div>)}
            <Button variant='contained' style={{'padding': '0', 'max-width': '30%'}} onClick={addBlogSection}>Add A Section</Button></div> : <></>}

        {section==='Product' ? <div>
            <h3>Product Specifications</h3>
            {productSpecs?.map((specs, index) => 
            <div>
                <TextField disabled variant="outlined" multiline={true} label='Heading' style={{'margin-bottom': '2vh', 'margin-top': '4vh', 'width': '100%'}} value={specs.heading}></TextField>
                <TextField disabled variant="outlined" multiline={true} label='Heading' style={{'margin-bottom': '2vh', 'margin-top': '4vh', 'width': '100%'}} value={specs.content}></TextField>
                <ProductSpecs number={index} heading={specs.heading} content={specs.content} text='Edit This Section'/>
                <DeleteConfirmation size='small' variant='contained' style={{'padding': '0', 'max-width': '30%'}} confirm={deleteProductSection} text={'Delete This Section'} id={index}/>
            </div>)}
            <Button variant='contained' style={{'padding': '0', 'max-width': '30%'}} onClick={addProductSection}>Add A Section</Button>
        </div> : <></>}

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