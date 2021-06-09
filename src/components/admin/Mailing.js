import React, {useState, useEffect} from "react";
import MailingCard from './MailingCard';
import AdminButton from './AdminButton';
import API from '../../utils/API';

const Mailing = () => {
    const [mailingList, setMailingList] = useState([]);
    const [testList, setTestList] = useState([]);
    const token = localStorage.getItem('token')

    const getMailingList = () => {
        API.getMailingList(token).then(res => {
            setMailingList(res.data)
        });
    }

    const removeMe = () => {
        console.log('Removed!');
    }

    return (
        <div>
        <h1>Here's a mailing form, dummy</h1>
        <AdminButton handleClick={getMailingList} name={'Mailing'} text={'Mailing List'}></AdminButton>
        <br/>
        {mailingList.map(mailing => {
            <MailingCard name={mailing.name} email={mailing.email} removeMe={removeMe}/>
        })}
        </div>
    )
    
}

export default Mailing;