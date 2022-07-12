import '../css/PrimaryButton.css';
export function PrimaryButton(props) {
    return (
        <div className='btn-frame'>
            <a href={props.path}>
                <div className={'PrimaryButton noselect'}>
                    {props.text}
                </div>
            </a>
        </div>
    );
}
