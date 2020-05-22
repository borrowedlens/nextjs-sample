import React from 'react';
import Router from 'next/router';

import Author from '../../components/Author';

const authIndexPage = (props) => (
    <>
        <h1>welcome to the auth index page</h1>
        <Author name={'vivek'} age={30} />
        <button onClick={() => Router.push('/')}>go to main</button>
    </>
);
export default authIndexPage;
