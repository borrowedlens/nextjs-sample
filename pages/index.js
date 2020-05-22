import React, { Component } from 'react';
import Link from 'next/link';

class Index extends Component {
    static getInitialProps(context) {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ appName: 'nextJS' });
            }, 1000);
        });
        return promise;
    }
    render() {
        return (
            <>
                <h1>welcome to the main page of {this.props.appName}</h1>
                <p>
                    go to{' '}
                    <Link href='/auth'>
                        <a>auth</a>
                    </Link>
                </p>
            </>
        );
    }
}
export default Index;
