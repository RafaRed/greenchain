import '../css/Viewtask.css'
import { NavBar } from "../../components/js/NavBar";
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { SecondaryButton } from '../../components/js/SecondaryButton';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';


function Viewtask() {
    return (
        <div className='Viewtask'>
            <NavBar></NavBar>
            <BackBar title='View Task' path='/'></BackBar>


            <div className='Viewtask-frame'>

                <div className='wrapper-buttons'>
                    <SecondaryButton text='Join'></SecondaryButton>
                    <PrimaryButton text='Fund'></PrimaryButton>
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
                                    <img src='images/usdt-logo.svg'></img>
                                </div>
                            </div>

                            <div className='vt-raised-label'>
                                Raised
                            </div>
                        </div>
                    </div>

                    <div className='rw3-userframe'>
                        <div className='user-avatar-profile'>
                            <img src='images/favatar.svg'></img>
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
                                    <img src='images/discord-ico.svg'></img>
                                    <img src='images/twitter-ico.svg'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <Title title='Progress'> </Title>

            </div>
        </div >
    )
}
export default Viewtask;