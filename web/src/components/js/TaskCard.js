import { Chips } from './Chips';
import { PrimaryButton } from './PrimaryButton';
import { SecondaryButton } from './SecondaryButton';
import '../css/TaskCard.css';

export function TaskCard(props) {
    return (<a href={props.path} className='containerpath'>
        <div className='taskcard-container'>

            <div className='taskcard-top'>

                <div className='expiredate-label'>
                    <span>{props.daysleft}</span> days left
                </div>


                <div className='values-frame'>
                    <div className='values-wrapper'>

                        <div className='col1-goal-wrapper'>
                            <div className='valuegoal-label'>
                                $ {props.goal}
                            </div>
                            <div className='goal-label'>
                                Goal
                            </div>
                        </div>

                        <div className='col2-goal-wrapper'>
                            <div class="vl"></div>
                        </div>

                        <div className='col3-raised-wrapper'>
                            <div className='totalraised-label'>
                                $ {props.raised}
                            </div>
                            <div className='raised-label'>
                                Raised
                            </div>
                        </div>
                    </div>

                    <div className='usdtlogo-frame'>
                        <div className='col4-usdtlogo'>
                            <img src='/images/usdt-logo.svg'></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className='taskcard-mid'>
                <div className='task-avataruser-wrapper'>
                    <div className='avatar noselect'>
                        <img src={props.image}></img>
                    </div>
                    <div className='username-label'>
                        {props.username}
                    </div>
                </div>

                <div className='tasktitledesc-wrapper'>
                    <div className='chipmembers-wrapped'>
                        <Chips status={props.status}></Chips>
                        <div className='members-label'>
                            <span>{props.membersmissing}</span> Members Missing
                        </div>
                    </div>
                    <div className='titledescription-wrapper'>
                        <div className='taskcard-title'>
                            {props.title}
                        </div>
                        <div className='taskdescription-label'>
                            {props.description}
                        </div>
                    </div>
                </div>
            </div>

            <div className='taskcard-bottom'>
                <div className='task-buttons'>
                    <SecondaryButton text='Join'></SecondaryButton>
                    <PrimaryButton text='Fund'></PrimaryButton>
                </div>
            </div>
        </div>
    </a>);
}
