import '../css/Viewreport.css';
import { NavBar } from '../../components/js/NavBar';
import { BackBar } from '../../components/js/BackBar';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { PrimaryButton } from '../../components/js/PrimaryButton';

function Viewreport() {
    return (
        <>
            <NavBar></NavBar>
            <div className="Viewreport">

                <BackBar title='View Report' path={'/'} ></BackBar>

                <div className='report-container'>

                    <div className='left-user'>

                        <div className='avataruser-wrapper'>
                            <div className='avatar'>
                                <img src='images/favatar.svg'></img>
                            </div>

                            <div className='username-label'>
                                username
                            </div>
                        </div>

                    </div>

                    <div className='right-report'>

                        <div className='chip-frame'>
                            <div className='chip-frame-relative'>
                                <Chips status='open'></Chips>
                            </div>
                        </div>

                        <Title title='Accumulation of garbage in an inappropriate place'></Title>

                        <div className='report-complete-location-label'>
                            Av. Avenida Francisco Glicério - Campinas, São Paulo - Brasil
                        </div>

                        <div className='report-img'>
                            <img src='images/report2-img.svg'></img>
                        </div>
                        <div className='desc-title'>
                            Description
                        </div>
                        <div className='description-label'>
                            One of the main environmental issues of the contemporary era is, without a doubt, the enormous amount of waste produced on the planet. Associated with this, another even more challenging problem arises: the non-appropriate reuse of these materials due to rampant consumption, waste and incorrect disposal of garbage.
                        </div>
                    </div>
                </div>

                <div className='proposedtask-frame'>
                    <div className='proposed-tasks'>
                        <Title title='Proposed Task'></Title>
                        <PrimaryButton text='New Task' path='#'></PrimaryButton>
                    </div>

                    <div className='taskcard-container'>
                        <div className='taskcard-top'>

                            <div className='expiredate-label'>
                                Expire in <span>6</span> days
                            </div>
                            <div className='values-wrapper'>
                                <div className='goal-wrapper'>
                                    <div className='valuegoal-label'>
                                        $ 2000
                                    </div>
                                    <div className='goal-label'>
                                        Goal
                                    </div>
                                </div>

                                <div class="vl"></div>

                                <div className='raised-wrapper'>
                                    <div className='totalraised-label'>
                                        $ 1000
                                    </div>
                                    <div className='raised-label'>
                                        Raised
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='taskcard-mid'>

                            <div className='task-avataruser-wrapper'>
                                <div className='avatar'>
                                    <img src='images/favatar.svg'></img>
                                </div>
                                <div className='username-label'>
                                    username
                                </div>
                            </div>

                            <div className='tasktitledesc-wrapper'>
                                <div className='chipmembers-wrapped'>
                                    <Chips status='open'></Chips>
                                    <div className='members-label'>
                                        <span>10</span> Members Missing
                                    </div>
                                </div>
                                <div className='taskcard-title'>
                                    Transporting garbage to the Aldeota ecopoint
                                </div>
                                <div className='taskdescription-label'>
                                    One of the main environmental issues of the contemporary era is, without a doubt, the enormous amount of waste produced on the planet. Associated with this, another even more challenging problem arises: the non-appropriate reuse of these materials due to rampant consumption, waste and incorrect disposal of garbage.
                                </div>
                            </div>
                        </div>

                        <div className='taskcard-bottom'>
                            <div className='task-buttons'>
                                <PrimaryButton text='Join'></PrimaryButton>
                                <PrimaryButton text='Fund'></PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>);
}
export default Viewreport;