import React from 'react';
import '../css/BackBar.css';

export function BackBar(props) {
    return (<div className='backbar'>
        <a href={props.path}>
            <img src="/images/arrowback.svg"></img>
        </a>
        {props.title}
    </div>);
}
