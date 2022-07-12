import React from 'react';
import '../css/Label.css';

export function Label(props) {
    return (<div className='label'>
        {props.label}
    </div>);
}
