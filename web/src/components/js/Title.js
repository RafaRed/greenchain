import React from 'react';
import '../css/Title.css';

export function Title(props) {
    if(props.lazy === true){
        
    }
    return (
        <div className={['title',props.lazy].join(' ')}>
            {props.title}
        </div>);
}
