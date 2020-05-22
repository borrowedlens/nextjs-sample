import React from 'react';
import Router from 'next/router';

import Author from '../../components/Author';

const authIndexPage = (props) => (
    <>
        <h1>welcome to the {props.appName}</h1>
        <Author name={'vivek'} age={30} />
        <button onClick={() => Router.push('/')}>go to main</button>
    </>
);

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ appName: 'auth page of nextJS' });
        }, 1000);
    });
    return promise;
};
export default authIndexPage;
