import '../css/Viewtask.css'
import { NavBar } from "../../components/js/NavBar";
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { SecondaryButton } from '../../components/js/SecondaryButton';

function Viewtask() {
    return (
        <div className='Viewtask'>
            <NavBar></NavBar>
            <BackBar title='View Task'></BackBar>

            <div className='Viewtask-frame'>

                <div className='wrapper-buttons'>
                    <SecondaryButton text='Join'></SecondaryButton>
                    <PrimaryButton text='Fund'></PrimaryButton>
                </div>

                <div className='viewtaskrows-frame'></div>

                <div className='rw1-userframe'>

                    <div className='user-avatar-profile'>
                        <img src='images/favatar.svg'></img>
                    </div>


                </div>


                <div className='rw2-userframe'>


                </div>


                <div className='rw3-userframe'>


                </div>





            </div>
        </div>
    )
}
export default Viewtask;