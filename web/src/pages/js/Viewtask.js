import '../css/Viewtask.css'
import { NavBar } from "../../components/js/NavBar";
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { SecondaryButton } from '../../components/js/SecondaryButton';
import { TextArea } from '../../components/js/TextArea';
import { InputText } from '../../components/js/InputText';
import { Label } from '../../components/js/Label';
import { Divider } from '../../components/js/Divider';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { ProgressViewTaskCard } from '../../components/js/ProgressViewTaskCard';
import { UserValidation } from '../../components/js/UserValidation';
import { useEffect, useState, useSyncExternalStore } from 'react';
import { useParams } from 'react-router-dom';
import { getTask } from '../../model/Calls/server';






function Viewtask() {

    const [selected, setSelected] = useState(0);
    const [task,setTask] = useState({})
    const { reportid } = useParams();
    const { taskid } = useParams();
    useEffect(()=>{
        LoadTask(reportid,taskid,setTask)
    },[])
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
                                ${task.requested_value}
                            </div>
                            <div className='vt-goal-label'>
                                Goal
                            </div>
                        </div>

                        <div className="s-verticalline"></div>

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


                        <div className='membersphotos-control-frame'>

                            <div className='hline'></div>

                            <div className='membersphotos-control-container'>

                                <div className='membersphotos-control-bt-left'>
                                    <img src='/images/chavron-left-ico.svg'></img>

                                </div>

                                <div className='membersphotos-control-body'>
                                    <div className='membersphotos-username-link-frame'>
                                        <UserValidation title='Fernanda' selected={selected} id={0} onClick={() => setSelected(0)}></UserValidation>
                                        <UserValidation title='Rafael' selected={selected} id={1} onClick={() => setSelected(1)}></UserValidation>
                                        <UserValidation title='Leandro' selected={selected} id={2} onClick={() => setSelected(2)}></UserValidation>
                                        <UserValidation title='Luciano' selected={selected} id={3} onClick={() => setSelected(3)}></UserValidation>
                                        <UserValidation title='Paola' selected={selected} id={4} onClick={() => setSelected(4)}></UserValidation>
                                    </div>
                                </div>

                                <div className='membersphotos-control-bt-right'>
                                    <img src='/images/chavron-right-ico.svg'></img>
                                </div>
                            </div>

                            <div className='hline'></div>


                        </div>

                        <div className='photo-gallery-frame'>

                            <div className='photo-gallery-container'>
                                <img src='/images/report2-img.svg'></img>
                            </div>

                            <div className='photo-gallery-container'>
                                <img src='/images/report2-img.svg'></img>
                            </div>

                            <div className='photo-gallery-container'>
                                <img src='/images/report2-img.svg'></img>
                            </div>

                        </div>

                        <div className='photo-gallery-container-btn-frame'>
                            <PrimaryButton text='+ Photos'></PrimaryButton>
                        </div>


                    </div>


                    <div className='col-vt-right-frame'>
                        <div className='col-vt-right'>
                            <div className='membersphotos-funders-label-wrapper'>
                                <div className='title-validation-label'>
                                    Funders
                                </div>
                                <div className='title-validation-label'>
                                    Verification
                                </div>
                            </div>
                            <div className='hline'></div>


                            <div className='vt-funderscheck-frame'>

                                <div className='funder-check-wrapper'>
                                    <div className='funder-user-label'>
                                        User001
                                    </div>
                                    <div className='funder-checkstatus-img'>
                                        <img src='/images/accept-ico.svg'></img>
                                    </div>
                                </div>

                                <div className='funder-check-wrapper'>
                                    <div className='funder-user-label'>
                                        User002
                                    </div>
                                    <div className='funder-checkstatus-img'>
                                        <img src='/images/reject-ico.svg'></img>
                                    </div>
                                </div>

                                <div className='funder-check-wrapper'>
                                    <div className='funder-user-label'>
                                        User003
                                    </div>
                                    <div className='funder-checkstatus-img'>
                                        <img src='/images/waiting-ico.svg'></img>
                                    </div>
                                </div>

                            </div>


                        </div>

                        <div className='vt-aprov-frame'>
                            <div className='vt-aprov-founders-wrapper'>
                                <div className='vt-aprov-founders-label'>
                                    <span>3</span> funders
                                </div>

                                <div className='vt-aprov-founders-label'>
                                    <span>70%</span> approval
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <Title title='About'></Title>

                <Label label='Title'></Label>

                <div className='s-input-frame'>
                    <InputText value={task.title} disabled={true}></InputText>
                </div>

                <Label label='Team Size'></Label>

                <div className='xxs-input-frame'>
                    <InputText type='number' value={task.team_size} disabled={true}></InputText>
                </div>

                <Label label='Requeriments' />
                <div className='s-textarea-frame'>
                    <TextArea rows={4} cols={4} value={task.requirements} disabled={true}></TextArea>
                </div>

                <Label label='Task Details' />
                <div className='m-textarea-frame'>
                    <TextArea rows={4} cols={4} value={task.details} disabled={true}></TextArea>
                </div>

                <Label label='Orientation' />

                <div className='s-textarea-frame'>
                    <TextArea rows={4} cols={4} value={task.orientation} disabled={true}></TextArea>
                </div>
                <Divider></Divider>

                <Title title='Deadlines'></Title>

                <Label label='Estimated time in days to complete this task'></Label>
                <div className='xxs-input-frame'>
                    <InputText type='number' value={task.estimated_days} disabled={true}></InputText>
                </div>


                <div className='wrapper-labelinputinfo'>
                    <Label label='Choose an end date for your project to expire'></Label>
                    <div className='inputinfo-col'>
                        • Projects will be expired at <span>12:00PM UTC</span> and cannot be started after this date
                    </div>
                </div>

                <div className='xxs-input-frame'>
                    <InputText value={task.max_date} disabled={true}></InputText>
                </div>

                <Divider></Divider>

                <Title title='Values' ></Title>

                <Label label='How much USDT in total this team requested to do this task?'></Label>
                <div className='xxs-input-frame'>
                    <InputText type={'number'} value={task.requested_value} disabled={true}></InputText>
                </div>

            </div>
        </div>
    )
}


function LoadTask(reportid,taskid,setTask){
    getTask({"report_id":reportid,"task_id":taskid}).then(result =>{
        setTask(result['content'])
    })
    
}

export default Viewtask;