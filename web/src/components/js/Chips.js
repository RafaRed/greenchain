import '../css/Chips.css';
export function Chips(props) {
    switch (props.status) {
        case "open":
            return (
                <div className='chip-open noselect'>
                    open
                </div>
            );
        case "completed":
            return (
                <div className="chip-completed noselect">
                    completed
                </div>
            );
        case "expired":
            return (
                <div className="chip-expired noselect">
                    expired
                </div>
            );
    }
}
