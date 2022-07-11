import '../css/PrimaryButton.css';
export function PrimaryButton(props) {
    return (<div className={'PrimaryButton noselect'} >
        {props.text}
    </div>);
}
