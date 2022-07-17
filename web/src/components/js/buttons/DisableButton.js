import '../../css/buttons/DisableButton.css'
export function PrimaryButton(props) {
    return (
        <div className='btn-frame'>
            <a href={props.path}>
                <div className={'PrimaryButton noselect'} onClick={props.onClick}>
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


