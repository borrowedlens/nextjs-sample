import React from 'react';
import Link from 'next/link';

const errorPage = (props) => (
    <>
        <h1>something went wrong!</h1>
        <p>
            go to{' '}
            <Link href='/'>
                <a>home</a>
            </Link>
        </p>
    </>
);
export default errorPage;
