import React, {useState, useEffect} from "react";
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import API from '../utils/API';
import store from '../utils/store';
import AdminButton from '../components/admin/AdminButton';
import Product from '../components/admin/Product';
import Blog from '../components/admin/Blog';
import Mailing from '../components/admin/Mailing';
import News from '../components/admin/News';
import Press from '../components/admin/Press';

const useStyles = makeStyles(() => ({
    logout: {
       backgroundColor: 'salmon'
    }

}))

const Admin = () => {
    let history = useHistory();
    const classes = useStyles();
    const token = localStorage.getItem('token');
    const [view, setView] = useState('Product');

    useEffect(() => {
        API.getMailingList(token).then(res => {
                store.dispatch({
                    type: 'GET_MAILING_LIST',
                    payload: {
                        mailingList: res.data
                    }
                })
        }).catch(err => {
            const errorCode = err.message.split(' ')[5]
            if(errorCode==401) {
                localStorage.removeItem('token');
                history.push('/login')
            } else {
                console.log(err.message)
            }
        });
        API.getTestList(token).then(res => {
            store.dispatch({
                type: 'GET_TEST_LIST',
                payload: {
                    testList: res.data
                }
            })
        }).catch(err => {
            const errorCode = err.message.split(' ')[5]
            if(errorCode==401) {
                localStorage.removeItem('token');
                history.push('/login')
            } else {
                console.log(err.message)
            }
        });
    }, [store.getState().mailingList.mailingList]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    const handleClick = e => {
        const currentView = e.currentTarget.getAttribute('name');
        setView(currentView);
        
    }

    const buttonText = ['Blog', 'Product', 'News Article', 'Press Release', 'Mailing List']
    
    return (
        <div>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <h1>Admin Dashboard</h1>
                <AdminButton text='Logout' handleClick={handleLogout}/>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    {buttonText.map(text => (
                        <AdminButton text={text} name={text.split(' ')[0]} handleClick={handleClick}/>
                    ))}
                </Grid>
                <Grid item xs={7}>
                    {view==='Product' ? 
                    <Product/> : view==='Blog' ?
                    <Blog/> : view==='News' ?
                    <News/> : view==='Press' ?
                    <Press/> : view==='Mailing' ?
                    <Mailing/> :
                    <Product/>}
                </Grid>
            </Grid>
        </Grid>

        </div>
    )
}

export default Admin;