import '../css/Viewreport.css';
import { NavBar } from '../../components/js/NavBar';
import { BackBar } from '../../components/js/BackBar';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { TaskCard } from '../../components/js/TaskCard';

function Viewreport() {
    return (
        <>
            <NavBar></NavBar>
            <div className="Viewreport">

                <BackBar title='View Report' path={'/'} ></BackBar>

                <div className='report-container'>

                    <div className='left-user'>

                        <div className='avataruser-wrapper'>
                            <div className='avatar noselect'>
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
                        <PrimaryButton text='New Task' path='/newtask'></PrimaryButton>
                    </div>

                    <div className='taskcards-frame'>
                        <TaskCard
                            title='Cartão teste' description='testando cartão'
                            goal='3000' membersmissing='3' daysleft='12' status='open' raised='1200' username='Rafael' image='images/mavatar.svg'></TaskCard>
                    </div>

                </div>
            </div>
        </>);
}
export default Viewreport;