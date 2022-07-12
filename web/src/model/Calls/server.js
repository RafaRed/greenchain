import { get_reports_path, server } from "../repository";

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