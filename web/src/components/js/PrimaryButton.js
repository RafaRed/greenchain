import '../css/PrimaryButton.css';
export function PrimaryButton(props) {
    return (
        <div className='btn-frame'>
            <a href={props.path}>
                <div className={'PrimaryButton noselect'} onClick={props.onClick}>
                    {props.text}
                </div>
            </a>
        </div>
    );
}
