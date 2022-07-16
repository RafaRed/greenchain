import React from 'react';
import '../css/InputText.css';

export function InputText(props) {
    var type = props.type === undefined ? 'text' : props.type
    return (<div className='input-frame'>
        <input className='input' type={type} onChange={props.onChange} defaultValue={props.value} placeholder={props.placeholder} disabled={props.disabled} />
    </div>);
}
