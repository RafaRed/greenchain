import '../../css/cards/TaskCard.css';
import { Chips } from '../Chips';
import { PrimaryButton } from '../buttons/PrimaryButton';
import { SecondaryButton } from '../buttons/SecondaryButton';
import { useEffect, useState } from 'react';
import { getMembers, getUsername, sendJoinTask } from '../../../model/Calls/server';

export function TaskCard(props) {
    const [joining, setJoining] = useState(false)
    const [joinButton, setJoinButton] = useState("Loader")
    const [username, setUsername] = useState()
    const [members, setMembers] = useState(0)

    useEffect(() => {
        LoadJoinState(props.taskData.report_id, props.taskData.task_id, props.taskData.user_id, setJoinButton, setMembers)
        loadUsername(setUsername, props.userid)
    }, [])
    return (<a className='containerpath'>
        <div className='taskcard-container' onClick={() => window.location.href = props.path}>

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
                            <div className="vl"></div>
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
                        {username}
                    </div>
                </div>

                <div className='tasktitledesc-wrapper'>
                    <div className='chipmembers-wrapped'>
                        <Chips status={props.status}></Chips>
                        <div className='members-label'>
                            <span>{props.team_size - members}</span> members missing
                        </div>
                    </div>
                    <div className='titledescription-wrapper'>
                        <div className='taskcard-title'>
                            {props.title}
                        </div>
                        <div className='taskdescription-label'>
                            <p>{props.description}</p>

                        </div>
                    </div>
                </div>
            </div>

            <div className='taskcard-bottom'>
                <div className='task-buttons'>
                    <SecondaryButton text='Fund'></SecondaryButton>
                    <PrimaryButton text={joinButton} onClick={(e) => Join(props.taskData.report_id, props.taskData.task_id, props.taskData.user_id, setJoining, setJoinButton, joinButton, e)}></PrimaryButton>
                </div>
            </div>
        </div>
    </a>);
}

function LoadJoinState(report_id, task_id, user_id, setJoinButton, setMembers) {
    getMembers({ "report_id": report_id, "task_id": task_id }).then(
        result => {
            if (result !== undefined && "content" in result && result.content.id !== undefined) {
                setMembers(Object.keys(result['content']['id']).length)
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

function loadUsername(setUsername, userid) {
    getUsername({ "user_id": userid }).then(response => {
        setUsername(response.username)
    })
}

function Join(report_id, task_id, user_id, setJoining, setJoinButton, joinButton, e) {
    e.stopPropagation();
    if (joinButton === "Join") {
        setJoining(true)
        setJoinButton("Loader")
        sendJoinTask({ "user_id": user_id, "report_id": report_id, "task_id": task_id }).then(() => {
            setJoining(false)
            setJoinButton("Leave")
        })
    }
}