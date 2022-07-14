import "../css/Home.css";
import { useEffect, useState, React } from 'react';
import { NavBar } from "../../components/js/NavBar";
import { PrimaryButton } from "../../components/js/PrimaryButton";
import { MidCard } from "../../components/js/MidCard";
import { ReportCard } from "../../components/js/ReportCard";
import { getReports } from "../../model/Calls/server";
import { getCID } from "../../model/Calls/ipfs";

function Home() {
	const [reports, setReports] = useState([])
	useEffect(() => {
		loadReports(setReports)
	}, [])
	return (
		<div className="Home">
			<NavBar></NavBar>

			<div className="top-container">
				<div className="topframe-leftside">
					<div className="toptitle-label">
						Collaborate with this chain of green actions <br /> and help improve the
						planet
					</div>
					<div className="topdescription-label">
						Now you can report environmental problems and propose actions
						<br /> that need community support to solve them.
					</div>
					<div className="topbtn-frame">
						<PrimaryButton text={"New Report"} path="/newreport"></PrimaryButton>
					</div>
				</div>
				<div className="topframe-rightside noselect">
					<img src="/images/topimg.svg" />
				</div>
			</div>

			<div className="mid-container">
				<div className="midtitle-label">How it's Work?</div>
				<div className="middescription-label">
					GreenChain is a plataform that uses the three principles of sustainability:
					social, environmental and economic, using the resources that web 3.0
					offers. <br />
					Our goal is to make the planet a better place for everyone.
				</div>
				<div className="midcards-frame">
					<MidCard
						img={"/images/reportcard.svg"}
						title={"REPORT"}
						description={
							"Bring attention to an environmental cause creating a report"
						}></MidCard>
					<MidCard
						img={"/images/taskcard.svg"}
						title={"TASK"}
						description={"Propose tasks to help in a given cause"}></MidCard>
					<MidCard
						img={"/images/communitycard.svg"}
						title={"COMMUNITY"}
						description={"Join or fund a task"}></MidCard>
					<MidCard
						img={"/images/paymentscard.svg"}
						title={"PAYMENTS"}
						description={
							"Tasks done will have their funds shared among members."
						}></MidCard>
				</div>
				<div className="midinfo-container">
					<div className="info1-label">
						• All transactions are recorded on the <span>blockchain</span> ensuring
						complete security for the community.
					</div>
					<div className="info2-label">
						• All transactions are made in <span>USDT</span> on your registered
						wallet.
					</div>
					<div className="info3-label">
						• If a task is not executed as intended, all supporters will have their{" "}
						<span>money refunded</span>, and the <span>action is canceled</span>.
					</div>
				</div>
			</div>

			<div className="bottom-container">
				<div className="bottom-title">Reports</div>
				<div className="reports-container">
					<RenderReports reports={reports}></RenderReports>
				</div>
			</div>
		</div>
	);
}


async function loadReports(setReports) {
	var reports_list = []
	var reports = await getReports();
	for (const [key, value] of Object.entries(reports["content"]["id"])) {
		var report_cid = reports["content"]["id"][key];
		var content = await getCID(report_cid);
		reports_list.push(content)
	}
	setReports(reports_list)
}

function RenderReports(props) {

	var reports_list = [];
	var reports = props.reports;

	for (var i = 0; i < reports.length; i++) {
		reports_list.push(
			<ReportCard
				title={reports[i].title}
				status={"open"}
				tasknumber={3}
				reportid={i}
        image={reports[i].images[0]}
				membersnumber={20}
				countryimg={"/images/Brazil.svg"}
				state={reports[i].location.state}
				citycountry={reports[i].location.city+" - "+reports[i].location.country}
				key={i}></ReportCard>
		);
	}

	return reports_list;
}

export default Home;
