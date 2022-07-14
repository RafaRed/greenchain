const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { initializeApp } = require("firebase-admin/app");
var admin = require("firebase-admin");
var serviceAccount = require("./config.json");
const rateLimit = require("express-rate-limit");
const {
	AddNode,
	UpdateNode,
	GetNodeByPath,
	InitRoot,
} = require("./model/ipfs_tree");
const { InitHashtable } = require("./model/ipfs_hashtable");
const { UpdateHashtable } = require("./model/ipfs_hashtable");
const { FindHashtableByValue } = require("./model/ipfs_hashtable");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://greenchaindb-default-rtdb.firebaseio.com",
});

async function initTree() {
	await InitRoot("Report");
	await InitRoot("Task");
	await InitRoot("User");
	await InitRoot("Donate");
	await InitRoot("Members");
	await InitRoot("Photos");
	await InitHashtable("UserWallet");
}

var db = admin.database();
const app = express();

app.use(cors());
app.use(
	rateLimit({
		windowMs: 1 * 60 * 60 * 1000, // 12 hour duration in milliseconds
		max: 150,
		message: "You exceeded requests hour limit!",
		headers: true,
	})
);
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	next();
});

app.post("/initialize", async (req, res) => {
	await initTree();
	res.send("sucess");
});

app.post("/create-report", async (req, res) => {
	var report = await AddNode("Report", req.body);
	var task = await AddNode("Task", {}, report["new_id"]);
	var members = await AddNode("Members", {}, report["new_id"]);
	var photos = await AddNode("Photos", {}, report["new_id"]);
	res.send(report);
});

app.post("/get-reports", async (req, res) => {
	var reports = await GetNodeByPath("Report");
	res.send(reports);
});

app.post("/get-report", async (req, res) => {
	var id = req.body.id;
	var report = await GetNodeByPath("Report/" + id);
	res.send(report);
});

app.post("/create-task", async (req, res) => {
	var task = req.body;
	var task_id = await AddNode("Task/" + task["report_id"], task);
	var members = await AddNode(`Members/${task["report_id"]}`,{},task_id["new_id"]);
	var photos = await AddNode(`Photos/${task["report_id"]}`,{},task_id["new_id"]);
	res.send(task_id);
});

app.post("/get-tasks", async (req, res) => {
	var report_id = req.body.report_id;
	var tasks = await GetNodeByPath("Task/" + report_id);
	res.send(tasks);
});

app.post("/get-task", async (req, res) => {
	var report_id = req.body.report_id;
	var task_id = req.body.task_id;
	var task = await GetNodeByPath("Task/" + report_id + "/" + task_id);
	res.send(task);
});

app.post("/register", async (req, res) => {
	var data = req.body;
	console.log(data)
	var user = await AddNode("User", data, "-1");
	await UpdateHashtable("UserWallet", user["new_id"], data["wallet"]);
	res.send({ status: "success" });
});

app.post("/join-task", async (req, res) => {
	var user_id = req.body.user_id;
	var task_id = req.body.task_id;
	var report_id = req.body.report_id;
	var user = await GetNodeByPath(`User/${user_id}`);
	var members_path = `Members/${report_id}/${task_id}`;
	await AddNode(members_path, user["content"], user_id);
	var photos_path = `Photos/${report_id}/${task_id}`;
	var photos = await AddNode(photos_path, {}, user_id);
	res.send({ status: "success" });
});

app.post("/get-user-id", async (req, res) => {
	var wallet = req.body.wallet;
	console.log(wallet)
	var id = await FindHashtableByValue("UserWallet", wallet);
	if (id === undefined) {
		res.send({ status: "not found" });
	}
	else{
		res.send({ id: id });
	}
	
});

app.post("/start-work", async (req, res) => {
	var user_id = req.body.user_id;
	var task_id = req.body.task_id;
	var report_id = req.body.report_id;
	var task = await GetNodeByPath("Task/" + report_id + "/" + task_id);
	if (user_id === task["content"]["creator"]) {
		task["content"]["status"] = "working";
		await UpdateNode("Task/" + report_id + "/" + task_id, task["content"]);
		res.send({ status: "Updated" });
	} else {
		res.send({ status: "Invalid user" });
	}
});

app.post("/send-work", async (req, res) => {
	var user_id = req.body.user_id;
	var task_id = req.body.task_id;
	var report_id = req.body.report_id;
	var task = await GetNodeByPath("Task/" + report_id + "/" + task_id);
	if (user_id === task["content"]["creator"]) {
		task["content"]["status"] = "done";
		await UpdateNode("Task/" + report_id + "/" + task_id, task["content"]);
		res.send({ status: "Updated" });
	} else {
		res.send({ status: "Invalid user" });
	}
});

app.post("/add-task-photo", async (req, res) => {
	var user_id = req.body.user_id;
	var task_id = req.body.task_id;
	var report_id = req.body.report_id;
	var photos = req.body.photos;
	var photos_path = `Photos/${report_id}/${task_id}/${user_id}`;
	await UpdateNode(photos_path, photos);
	res.send({ status: "Updated" });
});

app.post("/get-members", async (req, res) => {
	var report_id = req.body.report_id;
	var task_id = req.body.task_id;
	var members = await GetNodeByPath("Members/" + report_id + "/" + task_id);
	res.send(members);
});

app.post("/get-username", async (req, res) => {
	var user_id = req.body.user_id;
	var user = await GetNodeByPath("User/" + user_id);
	res.send({"username":user['content']['username']});
});




exports.app = functions.https.onRequest(app);
