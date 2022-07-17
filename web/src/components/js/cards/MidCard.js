import '../../css/cards/MidCard.css';
export function MidCard(props) {
    return (<div className='card-container'>
        <div className='card-img'>
            <img src={props.img} />
        </div>
        <div className='cardtitle-label'>
            {props.title}
        </div>
        <div className='carddescription-label'>
            {props.description}
        </div>
    </div>);
}
