import { CardButton } from './CardButton';
import '../css/ReportCard.css';

export function ReportCard(props) {
    return (<div className='reportcard'>

        <img src='/images/report-img.svg' />

        <div className='reportinfo-container'>

            <div className='report-title'>
                {props.title}

            </div>

            <div className='divider'></div>

            <div className='info-frame'>
                <div className='task-label'>
                    <span>{props.tasknumber}</span> Task
                </div>
                <div className='members-label'>
                    <span>{props.membersnumber}</span> Members
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
            <CardButton text='View'></CardButton>
        </div>



    </div>);
}
