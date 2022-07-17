import '../../css/buttons/CardButton.css'
export function CardButton(props) {
    return (
        <div className='btn-frame'>
            <a href={props.path}>
                <div className={'CardButton noselect'}>
                    {props.text}
                </div>
            </a>
        </div>
    );
}
