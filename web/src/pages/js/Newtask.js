import '../css/Newtask.css';
import { BackBar } from "../../components/js/BackBar";
import { NavBar } from "../../components/js/NavBar";
import { Title } from "../../components/js/Title";
import { Label } from "../../components/js/Label";
import { InputText } from "../../components/js/InputText";
import { Switch } from '../../components/js/Switch';
import { TextArea } from '../../components/js/TextArea';
import { Divider } from '../../components/js/Divider';
import { PrimaryButton } from '../../components/js/buttons/PrimaryButton'
import { useState } from 'react';
import { handleOnChangeData } from '../../utils/utils';
import { sendJoinTask, sendTask } from '../../model/Calls/server';
import { useParams } from 'react-router-dom';

function Newtask() {
    const [task, setTask] = useState({});
    const [buttonSubmitName, setButtonSubmitName] = useState("Submit");
    const { reportid } = useParams();
    return (
        <div className='Newtask'>

            <NavBar></NavBar>
            <BackBar title='New Task' path={'/viewreport/' + reportid}></BackBar>

            <div className='aboutform-frame-pt1'>

                <Title title='Task Informations'></Title>

                <Label label='Title'></Label>
                <div className='s-input-frame'>
                    <InputText onChange={(e) =>
                        handleOnChangeData(e, task, setTask, "title")
                    }></InputText>
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
                            <InputText type='number' onChange={(e) =>
                                handleOnChangeData(e, task, setTask, "team_size")
                            }></InputText>
                        </div>
                        <div className='infomaxmembers-label'>
                            <span>20</span> members limit
                        </div>
                    </div>
                </div>

                <Label label='Requeriments' />
                <div className='s-textarea-frame'>
                    <TextArea rows={4} cols={4} placeholder='Required behaviours, clothing, materials, items or equipment must be described here.' onChange={(e) =>
                        handleOnChangeData(e, task, setTask, "requirements")
                    }></TextArea>
                </div>

                <Label label='Details' />
                <div className='m-textarea-frame'>
                    <TextArea rows={4} cols={4} onChange={(e) =>
                        handleOnChangeData(e, task, setTask, "details")
                    } placeholder="Try to make a complete description of the activities that will be carried out, for example, If you have chosen a team, specify 
                    the team's assignments, important locations, mode of transport of the material, etc..."></TextArea>
                </div>

                <div className='inputinfo-rw'>
                    <Label label='Orientation' />
                    <div className='includ-label'>
                        (Optional)
                    </div>
                </div>

                <div className='s-textarea-frame'>
                    <TextArea rows={4} cols={4} placeholder="Use this space for additional guidelines, such as tips, alerts, or recommendations." onChange={(e) =>
                        handleOnChangeData(e, task, setTask, "orientation")
                    }></TextArea>
                </div>

                <Divider></Divider>

                <Title title='Deadlines'></Title>

                <Label label='Estimated time in days to complete your task'></Label>
                <div className='inputinfo-rw'>
                    <div className='xxs-input-frame'>
                        <InputText type='number' onChange={(e) =>
                            handleOnChangeData(e, task, setTask, "estimated_days")
                        }></InputText>
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
                    <InputText placeholder='mm/dd/yyyy' type='text' onChange={(e) =>
                        handleOnChangeData(e, task, setTask, "max_date")
                    }></InputText>
                </div>

                <Divider></Divider>

                <Title title='Values'></Title>

                <Label label='How much USDT in total your team request to do this task?'></Label>
                <div className='xxs-input-frame'>
                    <InputText type={'number'} placeholder='$ USDT' onChange={(e) =>
                        handleOnChangeData(e, task, setTask, "requested_value")
                    }></InputText>
                </div>

                <div className='register-btn-frame'>
                    <div className='register-btn'>
                        <PrimaryButton text={buttonSubmitName} onClick={() => CreateTask(task, reportid, setButtonSubmitName)}></PrimaryButton>
                    </div>
                </div>
            </div>
        </div>

    );


}

function CreateTask(task, reportid, setButtonSubmitName) {
    setButtonSubmitName("Loader")
    task['report_id'] = reportid
    task["userid"] = localStorage.getItem("greenchain-userid");;
    sendTask(task).then((new_task) => {
        console.log(new_task)
        var user_id = localStorage.getItem("greenchain-userid");
        sendJoinTask({ "user_id": user_id, "report_id": reportid, "task_id": new_task["new_id"] }).then(()=>{
            window.location.href = "/viewreport/" + reportid
        })
        
    })

}


export default Newtask;
