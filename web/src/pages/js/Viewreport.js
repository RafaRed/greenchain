import '../css/Viewreport.css';
import { NavBar } from '../../components/js/NavBar';
import { BackBar } from '../../components/js/BackBar';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { TaskCard } from '../../components/js/TaskCard';
import { useParams } from 'react-router-dom';
import { getReport, getTasks, getUsername } from '../../model/Calls/server';
import { useEffect, useState } from 'react';
import { getCID } from '../../model/Calls/ipfs';

function Viewreport() {
    const {reportid} = useParams();
    const [report,setReport] = useState({"location":{}, "images":{}})
    const [tasks,setTasks] = useState({})
    const [loaded, setLoaded] = useState(false)
    var lazy = loaded ? "" : "lazy"
    useEffect(()=>{
        loadReport(reportid,setReport,setLoaded)
        loadTasks(reportid,setTasks)
    },[])
    return (
        <>
            <NavBar></NavBar>
            <div className="Viewreport">

                <BackBar title='View Report' path={'/'} ></BackBar>

                <div className='report-container'>

                    <div className='left-user'>

                        <div className='avataruser-wrapper'>
                            <div className='avatar noselect'>
                                <img src='/images/favatar.svg'></img>
                            </div>

                            <div className='username-label'>
                                Fernanda
                            </div>
                        </div>

                    </div>

                    <div className='right-report'>

                        <div className='chip-frame'>
                            <div className='chip-frame-relative'>
                                <Chips status='open'></Chips>
                            </div>
                        </div>
                        {loaded ? <Title title={report.title}></Title> : <div className='lazy'/> }
                       

                        <div className={'report-complete-location-label'}>
                            {loaded ? report.location.address+" - "+report.location.city+", "+report.location.state+" - "+report.location.country : <div className='lazy'/>}
                        </div>

                        <div className='report-img'>
                            {loaded ? <img src={report.images[0]}></img> : <img src="/images/noimg.png"></img>}
                        </div>
                        <div className='desc-title'>
                            Description
                        </div>
                        <div className={'description-label'}>
                        {loaded ? report.description : <div className='lazy'/> }
                        </div>
                    </div>
                </div>

                <div className='proposedtask-frame'>
                    <div className='proposed-tasks'>
                        <Title title='Proposed Task'></Title>
                        <PrimaryButton text='New Task' path={'/newtask/'+reportid}></PrimaryButton>
                    </div>

                    <div className='taskcards-frame'>
                        <RenderTasks tasks={tasks}></RenderTasks>
                    </div>

                </div>
            </div>
        </>);
}


function loadReport(id,setReport,setLoaded){
    getReport({"id":id}).then(data=>{
        setReport(data["content"])
        setLoaded(true)
        console.log(data)
        /*getUsername(id).then(username=>{
            console.log(username)
        })*/
    })   
}

async function loadTasks(id,setTasks){
    var task_list = []
    console.log(id)
    var tasks = await getTasks({"report_id":id})
    for (const [key, value] of Object.entries(tasks["content"]["id"])) {
        var task_cid = tasks["content"]["id"][key];
        var content = await getCID(task_cid)
        task_list.push(content)
       
    }
    setTasks(task_list)
}

function RenderTasks(props){
 var task_list = []
 for(var i = 0; i < props.tasks.length; i++)
 {
    task_list.push( <TaskCard
        path={'/viewtask/'+i}
        title={props.tasks[i].title} description={props.tasks[i].description}
        goal={props.tasks[i].requested_value} membersmissing={props.tasks[i].team_size} daysleft='12' status='open' raised='1200' username='Rafael' image='/images/mavatar.svg'></TaskCard>)
 }
 return task_list
}

export default Viewreport;