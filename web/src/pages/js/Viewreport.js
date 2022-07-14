import '../css/Viewreport.css';
import { NavBar } from '../../components/js/NavBar';
import { BackBar } from '../../components/js/BackBar';
import { Chips } from '../../components/js/Chips';
import { Title } from '../../components/js/Title';
import { PrimaryButton } from '../../components/js/PrimaryButton';
import { TaskCard } from '../../components/js/TaskCard';
import { useParams } from 'react-router-dom';
import { getReport, getUsername } from '../../model/Calls/server';
import { useEffect, useState } from 'react';

function Viewreport() {
    const { reportid } = useParams();
    const [report, setReport] = useState({ "location": {}, "images": {} })
    const [loaded, setLoaded] = useState(false)
    var lazy = loaded ? "" : "lazy"
    useEffect(() => {
        loadReport(reportid, setReport, setLoaded)
    }, [])
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
                        {loaded ? <Title title={report.title}></Title> : <div className='lazy' />}


                        <div className={'report-complete-location-label'}>
                            {loaded ? report.location.address + " - " + report.location.city + ", " + report.location.state + " - " + report.location.country : <div className='lazy' />}
                        </div>

                        <div className='report-img'>
                            {loaded ? <img src={report.images[0]}></img> : <img src="/images/noimage.svg"></img>}
                        </div>
                        <div className='desc-title'>
                            Description
                        </div>
                        <div className={'description-label'}>
                            {loaded ? report.description : <div className='lazy' />}
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
                            path='/viewtask'
                            title='Cartão teste' description='testando cartão'
                            goal='3000' membersmissing='3' daysleft='12' status='open' raised='1200' username='Rafael' image='/images/mavatar.svg'></TaskCard>
                    </div>
                </div>
            </div>
        </>);
}


function loadReport(id, setReport, setLoaded) {
    getReport({ "id": id }).then(data => {
        setReport(data["content"])
        setLoaded(true)
        console.log(data)
        /*getUsername(id).then(username=>{
            console.log(username)
        })*/
    })

}

export default Viewreport;