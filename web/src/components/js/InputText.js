import React from 'react';
import '../css/InputText.css';

export function InputText(props) {
    return (<div className='input-frame'>
        <input className='input' type="text" onChange={props.onChange} placeholder={props.placeholder} />
    </div>);
}
