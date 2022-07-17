import '../css/Viewtask.css'
import { NavBar } from "../../components/js/NavBar";
import { BackBar } from '../../components/js/BackBar';
import { PrimaryButton } from '../../components/js/buttons/PrimaryButton';
import { SecondaryButton } from '../../components/js/buttons/SecondaryButton';
import { TextArea } from '../../components/js/TextArea';
import { InputText } from '../../components/js/InputText';
import { Label } from '../../components/js/Label';
import { Divider } from '../../components/js/Divider';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { ProgressViewTaskCard } from '../../components/js/ProgressViewTaskCard';
import { UserValidation } from '../../components/js/UserValidation';
import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { useParams } from 'react-router-dom';
import { addTaskPhoto, getMembers, getTask, getTaskPhotos, getUser, getUsername, sendJoinTask } from '../../model/Calls/server';
import { getCID } from '../../model/Calls/ipfs';
import { getBase64 } from '../../utils/utils';
import FunderPopup from '../../components/js/FunderPopup';

function Viewtask() {
    const [selected, setSelected] = useState("0");
    const [task, setTask] = useState({})
    const { reportid } = useParams();
    const { taskid } = useParams();
    const [joinButton, setJoinButton] = useState("Loader")
    const [membersSize, setMembersSize] = useState(0)
    const [members, setMembers] = useState({})
    const [photoButtonTxt, setPhotoButtonTxt] = useState("+ Photo")
    var user_id = localStorage.getItem("greenchain-userid");
    const [creator, setCreator] = useState("")
    const fileInput = useRef(null);
    const selectFile = () => {
        fileInput.current.click();
    };
    const [userPhotos, setUserPhotos] = useState([]);
    const [track, setTrack] = useState(0)
    const [startTask, setStartTask] = useState(false)
    const [completeTask, setCompletTask] = useState(false)
    const [openPopup, setOpenPopup] = useState(false)
    useEffect(()=>{
        LoadTask(reportid,taskid,setTask,setCreator)
        LoadJoinState(reportid,taskid,user_id,setJoinButton,setMembersSize)
        LoadMembers(reportid,taskid,setMembers)
        
    },[])

    useEffect(() => {
        console.log("change")
        LoadPhotos(reportid, taskid, selected, setUserPhotos)
    }, [selected])

    useEffect(() => {
        trackProgress(membersSize, task.team_size, task.requested_value, 1000, setTrack)
    }, [members, task])

    return (
        <div className='Viewtask'>
            <FunderPopup openPopup={openPopup} setOpenPopup={setOpenPopup} report_id={reportid} task_id={taskid} user_id={user_id}></FunderPopup>
            <NavBar></NavBar>
            <BackBar title='View Task' path={'/viewreport/' + reportid}></BackBar>


            <div className='Viewtask-frame'>

           

                <div className='wrapper-buttons'>
                    <SecondaryButton text='Fund' onClick={()=>setOpenPopup(true)}></SecondaryButton>
                    <PrimaryButton text={joinButton} onClick={()=>Join(reportid,taskid,user_id,setJoinButton,joinButton)}></PrimaryButton>
                </div>

                <div className='viewtaskrows-frame'>
                    <div className='rw1-chips-members-leftdays'>
                        <div className='col-chips-members-leftdays'>
                            <div className='vt-chips-frame'>
                                <Chips status='open'></Chips>
                            </div>
                            <div className={'members-missing-label'}>
                                <span>{task.team_size === undefined ? 0 : task.team_size - membersSize}</span> members missing
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
                                    ${task.raised}
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
                                    {creator.username}
                                </div>
                                <div className='col3-user-email-label'>
                                    {creator.email}
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
                    <ProgressViewTaskCard title='COMPLETE TEAM' image='/images/team-ico.svg' isActive={track > 0 ? true : false}></ProgressViewTaskCard>

                    <div className='vt-progress-wrapper-card-button'>
                        <ProgressViewTaskCard title='REQUEST VALUE REACHED' image='/images/value-ico.svg' isActive={track > 1 ? true : false}></ProgressViewTaskCard>
                        <PrimaryButton text='Start' onClick={()=> track > 1 ? setStartTask(true):{}}></PrimaryButton>
                    </div>


                    <div className='vt-progress-wrapper-card-button'>
                        <ProgressViewTaskCard title='COMPLETE TASK AND POST PHOTOS ' image='/images/photos-ico.svg' isActive={track > 1 && startTask ? true : false}></ProgressViewTaskCard>
                        <PrimaryButton text='Done' onClick={()=> track > 1 ? setCompletTask(true):{}}></PrimaryButton>
                    </div>
                    <ProgressViewTaskCard title='FUNDERS REVIEW' image='/images/funders-ico.svg' isActive={track > 1 && startTask && completeTask ? true : false}></ProgressViewTaskCard>
                    <ProgressViewTaskCard title='THE TEAM WILL BE PAID SOON' image='/images/paid-ico.svg' isActive={track > 4 ? true : false}></ProgressViewTaskCard>
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
                                        <RenderMembers members={members} selected={selected} setSelected={setSelected}></RenderMembers>
                                    </div>
                                </div>

                                <div className='membersphotos-control-bt-right'>
                                    <img src='/images/chavron-right-ico.svg'></img>
                                </div>
                            </div>

                            <div className='hline'></div>


                        </div>

                        <div className='photo-gallery-frame'>

                            <RenderPhotos userPhotos={userPhotos} ></RenderPhotos>

                        </div>

                        <div className='photo-gallery-container-btn-frame'>
                            <PrimaryButton text={photoButtonTxt} onClick={selectFile}></PrimaryButton>
                            <input
                                ref={fileInput}
                                onChange={(e) => addImage(e, reportid, taskid, user_id, userPhotos, setPhotoButtonTxt)}
                                type="file"
                                style={{ display: "none" }}
                            />
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

async function LoadMembers(reportid, taskid, setMembers) {
    var members = []
    var result = await getMembers({ "report_id": reportid, "task_id": taskid })

    if (result !== undefined && "content" in result && result.content.id !== undefined) {
        for (const [key, value] of Object.entries(result["content"]["id"])) {
            members.push(await getCID(result["content"]["id"][key]))
        }
    }
    setMembers(members)
}

function LoadPhotos(report_id, task_id, selected, setUserPhotos) {
    var photos = []
    setUserPhotos([])
    getTaskPhotos({ "user_id": selected, "task_id": task_id, "report_id": report_id }).then(result => {
        if (result['content'][0] !== undefined) {
            setUserPhotos(result['content'][0])
        }
        else {
            setUserPhotos([])
        }


    })

    return photos

}

function RenderPhotos({ userPhotos }) {
    var photos = []
    if (userPhotos !== undefined) {
        for (var i = 0; i < userPhotos.length; i++) {
            photos.push(<div key={i} className='photo-gallery-container'>
                <img src={userPhotos[i]} ></img>
            </div>)
        }
    }

    return photos;

}

function LoadTask(reportid, taskid, setTask, setCreator) {
    getTask({ "report_id": reportid, "task_id": taskid }).then(result => {
        setTask(result['content'])
        getUser({ "user_id": result['content']['userid'] }).then(response => {
            setCreator(response)
        })
    })

}

function Join(report_id, task_id, user_id, setJoinButton, joinButton) {
    if (joinButton === "Join") {
        setJoinButton("Loader")
        sendJoinTask({ "user_id": user_id, "report_id": report_id, "task_id": task_id }).then(() => {
            setJoinButton("Leave")
        })
    }
}

function LoadJoinState(report_id, task_id, user_id, setJoinButton, setMembersSize) {
    getMembers({ "report_id": report_id, "task_id": task_id }).then(
        result => {
            if (result !== undefined && "content" in result && result.content.id !== undefined) {
                setMembersSize(Object.keys(result['content']['id']).length)
                if (user_id in result['content']['id']) {
                    setJoinButton("Leave")
                }
                else {
                    setJoinButton("Join")
                }
            }
            else {
                setJoinButton("Join")
            }
        }
    )
}

function RenderMembers({ members, selected, setSelected }) {
    var members_card = []
    for (const [key, value] of Object.entries(members)) {
        members_card.push(<UserValidation title={members[key].username} selected={selected} id={key} key={key} onClick={() => setSelected(key)}></UserValidation>)
    }
    return members_card;
}

async function addImage(e, report_id, task_id, user_id, photos, setPhotoButtonTxt) {
    setPhotoButtonTxt("Loader")
    const file = e.target.files[0];
    console.log(file)
    if (file.type === "image/jpeg" || file.type === "image/png") {
        var photo = await getBase64(file)
        console.log(photos)
        photos.push(photo)
        UploadTaskPhoto(user_id, task_id, report_id, photos)
    }
}

function UploadTaskPhoto(user_id, task_id, report_id, photo) {
    addTaskPhoto({ user_id: user_id, task_id: task_id, report_id: report_id, photos: [photo] }).then(
        result => {
            window.location.reload(false)
        }

    )
}

function trackProgress(members, requiredMembers, requestValue, valueRaised, setTrack) {
    var track = 0
    console.log(members)
    console.log(requiredMembers)
    if (members >= requiredMembers) {
        track = 1
        if (valueRaised >= requestValue) {
            track = 2
        }
    }

    setTrack(track)
}




export default Viewtask;