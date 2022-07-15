import React from 'react';
import '../css/BackBar.css';

export function BackBar(props) {
    return (<div className='backbar'>
        <a href={props.path}>
            <div className='arrowback-image'>
                <img src="/images/arrowback.svg"></img>
            </div>

        </a>
        {props.title}
    </div>);
}
