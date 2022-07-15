import '../css/UserValidation.css'
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

            <div className='membersphotos-control-profile-link'>
                <a href='#'>
                    Contact
                </a>
            </div>
        </div>
    </div>);
}
