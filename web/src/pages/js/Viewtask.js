import '../css/Viewtask.css'
import { NavBar } from "../../components/js/NavBar";
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { SecondaryButton } from '../../components/js/SecondaryButton';
import { Label } from '../../components/js/Label';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { ProgressViewTaskCard } from '../../components/js/ProgressViewTaskCard';




function Viewtask() {
    return (
        <div className='Viewtask'>
            <NavBar></NavBar>
            <BackBar title='View Task' path='/'></BackBar>


            <div className='Viewtask-frame'>

                <div className='wrapper-buttons'>
                    <SecondaryButton text='Fund'></SecondaryButton>
                    <PrimaryButton text='Join'></PrimaryButton>
                </div>

                <div className='viewtaskrows-frame'>
                    <div className='rw1-chips-members-leftdays'>
                        <div className='col-chips-members-leftdays'>
                            <div className='vt-chips-frame'>
                                <Chips status='open'></Chips>
                            </div>
                            <div className='members-missing-label'>
                                <span>3</span> members missing
                            </div>

                            <div className='rw-daysleft-label'>
                                <div className='vt-rw-daysleft-label'>
                                    <span>10</span> days left
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='rw-goal-divider-raised-ico-frame'>

                        <div className='col-goal-wrapper-labels'>
                            <div className='vt-goal'>
                                $2000
                            </div>
                            <div className='vt-goal-label'>
                                Goal
                            </div>
                        </div>

                        <div class="s-verticalline"></div>

                        <div className='col-raised-wrapper-labels'>

                            <div className='wrapper-vt-raised-logo'>
                                <div className='vt-raised'>
                                    $1500
                                </div>
                                <div className='vt-usdt-logo'>
                                    <img src='/images/usdt-logo.svg'></img>
                                </div>
                            </div>

                            <div className='vt-raised-label'>
                                Raised
                            </div>
                        </div>
                    </div>

                    <div className='rw3-userframe'>
                        <div className='user-avatar-profile'>
                            <img src='/images/favatar.svg'></img>
                        </div>
                        <div className='user-infos-frame'>
                            <div className='col-user-infos-profile'>
                                <div className='col1-user-creator-label'>
                                    Creator
                                </div>
                                <div className='col2-user-label'>
                                    Fernanda
                                </div>
                                <div className='col3-user-email-label'>
                                    fernanda@gmail.com
                                </div>
                                <div className='col4-user-contact-icons'>
                                    <img src='/images/discord-ico.svg'></img>
                                    <img src='/images/twitter-ico.svg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Title title='Progress'> </Title>

                <div className='rw-tv-info-frame-label'>
                    <div className='inputinfo-col'>
                        • The execution of the proposed tasks and the posting of photos are mandatory for the team to receive payments;
                    </div>
                    <div className='inputinfo-col'>
                        • You must complete your tasks before the task end date.
                    </div>
                </div>

                <div className='vt-progress-frame'>
                    <ProgressViewTaskCard title='OPEN TASK' image='/images/opentask-ico.svg' isActive={true}></ProgressViewTaskCard>
                    <ProgressViewTaskCard title='COMPLETE TEAM' image='/images/team-ico.svg' isActive={false}></ProgressViewTaskCard>

                    <div className='vt-progress-wrapper-card-button'>
                        <ProgressViewTaskCard title='REQUEST VALUE REACHED' image='/images/value-ico.svg' isActive={false}></ProgressViewTaskCard>
                        <PrimaryButton text='Start'></PrimaryButton>
                    </div>


                    <div className='vt-progress-wrapper-card-button'>
                        <ProgressViewTaskCard title='REQUEST VALUE REACHED' image='/images/photos-ico.svg' isActive={false}></ProgressViewTaskCard>
                        <PrimaryButton text='Done'></PrimaryButton>
                    </div>
                    <ProgressViewTaskCard title='FUNDERS REVIEW' image='/images/funders-ico.svg' isActive={false}></ProgressViewTaskCard>
                    <ProgressViewTaskCard title='THE TEAM WILL BE PAID SOON' image='/images/paid-ico.svg' isActive={false}></ProgressViewTaskCard>
                </div>

                <Title title='Task Validation'></Title>

                <div className='wrapper-buttons'>
                    <SecondaryButton text='Accept'></SecondaryButton>
                    <PrimaryButton text='Reject'></PrimaryButton>
                </div>

                <div className='validation-frame'>

                    <div className='col-vt-left'>
                        <div className='title-validation-label'>
                            Members Photos
                        </div>

                        <div className='hline'></div>

                        <div className=''></div>






                    </div>








                    <div className='col-vt-right'>

                    </div>

                </div>





            </div>
        </div >
    )
}
export default Viewtask;