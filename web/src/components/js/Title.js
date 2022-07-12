import React from 'react';
import '../css/Title.css';

export function Title(props) {
    return (
        <div className='title'>
            {props.title}
        </div>);
}
