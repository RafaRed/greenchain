import '../css/Chips.css';
export function Chips(props) {
    switch (props.status) {
        case "open":
            return (
                <div className='chip-open'>
                    open
                </div>
            );
        case "completed":
            return (
                <div className="chip-completed">
                    completed
                </div>
            );
        case "expired":
            return (
                <div className="chip-expired">
                    expired
                </div>
            );
    }
}
