import React from 'react';

const author = (props) => (
    <div>
        <h4>name: {props.name}</h4>
        <h4>age: {props.age}</h4>
        <style jsx>
            {`
                div {
                    border: 1px solid #eee;
                    width: 80%;
                    text-align: center;
                    box-sizing: border-box;
                    margin: auto;
                }
            `}
        </style>
    </div>
);
export default author;
