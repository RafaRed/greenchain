import '../../css/buttons/DisableButton.css'
export function DisableButton(props) {
    return (
        <div className='btn-frame'>
            <a href={props.path}>
                <div className={'DisableButton noselect'} onClick={props.onClick}>
                    {props.text === "Loader" ? <div className="lds-facebook"><div>
                    </div>
                        <div>
                        </div>
                        <div></div>
                    </div> : props.text}
                </div>
            </a>

        </div>
    );
}


