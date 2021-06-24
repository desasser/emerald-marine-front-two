import React, {useEffect} from 'react';

const Page = props => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            {props.children}
        </>
    );
};

export default Page;