import React from 'react';
import Link from 'next/link';

const index = (props) => (
    <>
        <h1>welcome to the main page</h1>
        <p>
            go to{' '}
            <Link href='/auth'>
                <a>auth</a>
            </Link>
        </p>
    </>
);
export default index;
