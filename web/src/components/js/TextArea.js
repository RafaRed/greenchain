import '../css/TaskCard.css';
export function TextArea(props) {
    return (<textarea placeholder={props.placeholder} rows={props.rows} cols={props.cols}>
    </textarea>);
}