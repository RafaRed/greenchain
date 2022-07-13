import '../css/Newtask.css';
import { BackBar } from "../../components/js/BackBar";
import { NavBar } from "../../components/js/NavBar";
import { Title } from "../../components/js/Title";
import { Label } from "../../components/js/Label";
import { InputText } from "../../components/js/InputText";
import { Switch } from '../../components/js/Switch';
import { TextArea } from '../../components/js/TextArea';
import { Divider } from '../../components/js/Divider';
import { PrimaryButton } from '../../components/js/PrimaryButton';

function Newtask() {
    return (
        <div className='Newtask'>

            <NavBar></NavBar>
            <BackBar title='New Task'></BackBar>

            <div className='aboutform-frame-pt1'>

                <Title title='About Solution'></Title>

                <Label label='Task Title'></Label>
                <div className='s-input-frame'>
                    <InputText></InputText>
                </div>

                <div className='wrapper-label-switch'>
                    <div className='switch-frame'>
                        <Label label='Does your activity comply with the laws?'></Label>
                        <Switch></Switch>
                    </div>
                </div>

                <div className='teamsize-frame'>
                    <div className='teamsizeinfos-rw'>
                        <Label label='Team Size'></Label>
                        <div className='includ-label'>
                            (Including you)
                        </div>
                    </div>

                    <div className='inputinfo-rw'>
                        <div className='xxs-input-frame'>
                            <InputText></InputText>
                        </div>
                        <div className='infomaxmembers-label'>
                            <span>20</span> members limit
                        </div>
                    </div>
                </div>

                <Label label='Requeriments' />
                <div className='s-textarea-frame'>
                    <TextArea rows={4} cols={4} placeholder='Required behaviours, clothing, materials, items or equipment must be described here.'></TextArea>
                </div>

                <Label label='Task Details' />
                <div className='m-textarea-frame'>
                    <TextArea rows={4} cols={4} placeholder="Try to make a complete description of the activities that will be carried out, for example, If you have chosen a team, specify 
                    the team's assignments, important locations, mode of transport of the material, etc..."></TextArea>
                </div>

                <div className='inputinfo-rw'>
                    <Label label='Orientation' />
                    <div className='includ-label'>
                        (Optional)
                    </div>
                </div>

                <div className='s-textarea-frame'>
                    <TextArea rows={4} cols={4} placeholder="Use this space for additional guidelines, such as tips, alerts, or recommendations."></TextArea>
                </div>

                <Divider></Divider>

                <Title title='Deadlines'></Title>

                <Label label='Estimated time in days to complete your task'></Label>
                <div className='inputinfo-rw'>
                    <div className='xxs-input-frame'>
                        <InputText></InputText>
                    </div>
                    <div className='infomaxmembers-label'>
                        <span>20</span> days limit
                    </div>
                </div>

                <div className='wrapper-labelinputinfo'>
                    <Label label='Choose an end date for your project to expire'></Label>
                    <div className='inputinfo-col'>
                        • Projects will be expired at <span>12:00PM UTC</span> and cannot be started after this date
                    </div>
                </div>

                <div className='xxs-input-frame'>
                    <InputText placeholder='mm/dd/yyyy'></InputText>
                </div>

                <Divider></Divider>

                <Title title='Values'></Title>

                <Label label='How much USDT in total your team request to do this task?'></Label>
                <div className='xxs-input-frame'>
                    <InputText placeholder='$ USDT'></InputText>
                </div>

                <div className='register-btn-frame'>
                    <div className='register-btn'>
                        <PrimaryButton text={'Submit'} onClick={'#'}></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>

    );


}



export default Newtask;
