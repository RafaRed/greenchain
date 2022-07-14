import { get_reports_path, get_username_path, get_user_id_path, register_path, report_path, server } from "../repository";


export async function endpointCall(data, endpoint) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	};
	return new Promise((resolve, reject) => {
		fetch(server + endpoint, requestOptions)
			.then((response) => response.json())
			.then((data) => resolve(data));
	});
}



export async function getReports(contestid) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({}),
	};
	return new Promise((resolve, reject) => {
		fetch(server + get_reports_path, requestOptions)
			.then((response) => response.json())
			.then((data) => resolve(data));
	});
}

export async function getMembers(report_id, task_id) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({"report_id":report_id, "task_id":task_id}),
	};
	return new Promise((resolve, reject) => {
		fetch(server + get_reports_path, requestOptions)
			.then((response) => response.json())
			.then((data) => resolve(data));
	});
}
export async function getTasks(report_id) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({"report_id":report_id}),
	};
	return new Promise((resolve, reject) => {
		fetch(server + get_reports_path, requestOptions)
			.then((response) => response.json())
			.then((data) => resolve(data));
	});
}

export async function sendReport(data){
	return endpointCall(data,report_path)
}

export async function sendRegister(data){
	return endpointCall(data,register_path)
}

export async function getUserId(data){
	return endpointCall(data,get_user_id_path)
}

export async function getUsername(data){
	return endpointCall(data,get_username_path)
}