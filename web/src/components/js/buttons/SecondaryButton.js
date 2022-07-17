import '../../css/buttons/SecondaryButton.css';
export function SecondaryButton(props) {
    return (
        <div className='secondarybtn-frame'>
            <a href={props.path}>
                <div className={'SecondaryButton noselect'} onClick={props.onClick}>
                    {props.text}
                </div>
            </a>
        </div>
    );
}
