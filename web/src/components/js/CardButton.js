import '../css/CardButton.css';
export function CardButton(props) {
    return (<div className={'CardButton noselect'} >
        {props.text}
    </div>);
}
