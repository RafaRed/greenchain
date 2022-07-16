import { get_members_path, get_members_size_path, get_reports_path, get_report_path, get_tasks_path, get_task_path, get_task_size_path, get_username_path, get_user_id_path, join_task_path, register_path, report_path, send_task_path, server } from "../repository";


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


export async function getMembers(data) {
	return endpointCall(data, get_members_path)
}

export async function sendReport(data) {
	return endpointCall(data, report_path)
}

export async function sendRegister(data) {
	return endpointCall(data, register_path)
}

export async function getUserId(data) {
	return endpointCall(data, get_user_id_path)
}

export async function getUsername(data) {
	return endpointCall(data, get_username_path)
}

export async function getReport(data) {
	return endpointCall(data, get_report_path)
}

export async function sendTask(data) {
	return endpointCall(data, send_task_path)
}

export async function getTasks(data) {
	return endpointCall(data, get_tasks_path)
}

export async function getMembersSize(data) {
	return endpointCall(data, get_members_size_path)
}

export async function getTasksSize(data) {
	return endpointCall(data, get_task_size_path)
}

export async function sendJoinTask(data) {
	return endpointCall(data, join_task_path)
}

export async function getTask(data) {
	return endpointCall(data, get_task_path)
}