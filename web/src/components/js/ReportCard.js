import { CardButton } from './CardButton';
import '../css/ReportCard.css';
import { Chips } from './Chips';

export function ReportCard(props) {
    return (<div className='reportcard'>
        <div className='imgstatus'>
            <img src={props.image} />
            <Chips status={props.status}></Chips>
        </div>
        <div className='reportinfo-container'>
            <div className='report-title'>
                {props.title}
            </div>
            <div className='card-divider'></div>
            <div className='info-frame'>
                <div className='task-label'>
                <span className={props.tasknumber === undefined ? "lazy-field" : ""}>{props.tasknumber}</span> Task
                </div>
                <div className='members-label'>
                    <span className={props.membersnumber === undefined ? "lazy-field" : ""}>{props.membersnumber}</span> Members
                </div>
            </div>
            <div className='report-location-frame'>

                <div className='report-country-image'>
                    <img src={props.countryimg} />
                </div>

                <div className='report-location-label'>
                    <div className='report-location-country'>
                        {props.state}
                    </div>
                    <div className='report-location-state'>
                        {props.citycountry}
                    </div>
                </div>
            </div>
            <CardButton text='View' path={'/viewreport/'+props.reportid}></CardButton>
        </div>
    </div>
    );
}
