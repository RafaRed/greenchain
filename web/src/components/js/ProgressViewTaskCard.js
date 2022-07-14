import '../css/ProgressViewTaskCard.css'
import { PrimaryButton } from './PrimaryButton';

export function ProgressViewTaskCard(props) {
    var isActive = props.isActive ? '-active' : ''
    var hasButton = props.hasButton
    return (<div className={'vt-container-progress' + isActive} >

        <div className='col-vt-wrapped-ico-label'>
            <div className='col-vt-wrapped-ico-label-frame'>
                <img src={props.image}></img>
            </div>

            <div className='vt-progress-card-label-frame'>
                <div className='vt-progress-card-label'>
                    {props.title}
                </div>
            </div>
        </div>
    </div>);


}
