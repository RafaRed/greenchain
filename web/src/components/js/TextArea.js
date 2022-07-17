import '../css/cards/TaskCard.css';
export function TextArea(props) {
    return (<textarea placeholder={props.placeholder} rows={props.rows} cols={props.cols} onChange={props.onChange} value={props.value} disabled={props.disabled}>
    </textarea>);
}
