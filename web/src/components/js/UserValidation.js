import '../css/UserValidation.css'
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';


export function UserValidation(props) {

    var selected = props.selected === props.id ? '-active' : '';

    return (<div className='membersphotos-username-wrapper'>

        <div className='membersphotos-control-avatar-img'>
            <img src='/images/favatar.svg'></img>
        </div>


        <div className='col-membersphotos-username-link-wrapper'>

            <div className={'membersphotos-username-label' + selected} onClick={props.onClick}>
                {props.title}
            </div>

            <div className='membersphotos-control-profile-link' >
                <a onClick={() => clickContact(props.setContactPopup, props.setContactUser, props.member)}>
                    Contact
                </a>
            </div>
        </div>
    </div>);


}

function clickContact(setContactPopup, setContactUser, member) {
    setContactPopup(true);
    setContactUser(member);
}