import React, {useState, useEffect} from "react";
import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import store from '../utils/store';
import API from '../utils/API';
import {fetchMailingList} from '../utils/actions/mailingListActions';
import {fetchTestList} from '../utils/actions/testListActions';
import AdminButton from '../components/admin/AdminButton';
import Product from '../components/admin/Product';
import Blog from '../components/admin/Blog';
import Mailing from '../components/admin/Mailing';
import News from '../components/admin/News';
import Press from '../components/admin/Press';

const useStyles = makeStyles(() => ({
    logout: {
       backgroundColor: 'salmon'
    },
    buttons: {
        marginTop: '10vh'
    }
}))

const token = localStorage.getItem('token')

store.dispatch(fetchMailingList(token));
store.dispatch(fetchTestList(token));

const Admin = () => {
    let history = useHistory();
    const classes = useStyles();
    const [view, setView] = useState('Welcome');
    const [user, setUser] = useState({
        username: '',
        isLoggedIn: false
    });

    useEffect(() => {
        API.getVip(localStorage.getItem('token')).then(res => {
            res.data.username ? setUser({username: res.data.username, isLoggedIn: true}) : history.push('/login');
        }).catch(err => {
            setUser({username: '', isLoggedIn: false});
            history.push('/login');
            localStorage.removeItem('token')
        });
    }, [token]);

    const buttonText = ['Blog', 'Product', 'News Article', 'Press Releases', 'Mailing List']

    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login');
    }

    const handleClick = e => {
        const currentView = e.currentTarget.getAttribute('name');
        setView(currentView);
        
    }
    
    return (
        <div>
        { user.isLoggedIn ? 
            <Grid container spacing={3}>
            <Grid container spacing={1} className={classes.buttons}>
                <Grid item xs={12} style={{'display': 'flex', 'flex-direction': 'row'}}>
                    {buttonText.map(text => (
                        <AdminButton text={text} name={text.split(' ')[0]} handleClick={handleClick}/>
                    ))}
                    <AdminButton text='Logout' handleClick={handleLogout}/>
                </Grid>
                <Grid item xs={12}>
                    {view==='Product' ? 
                    <Product/> : view==='Blog' ?
                    <Blog/> : view==='News' ?
                    <News/> : view==='Press' ?
                    <Press/> : view==='Mailing' ?
                    <Mailing/> :
                    <Product/>}
                </Grid>
            </Grid>
        </Grid> :
        <h1>You must be an administrator to access this page.</h1>
        }
        

        </div>
    )
}

export default Admin;