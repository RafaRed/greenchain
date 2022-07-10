const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { initializeApp } = require("firebase-admin/app");
var admin = require("firebase-admin");
var serviceAccount = require("./config.json");
const rateLimit = require("express-rate-limit");
const { CreateRoot, AddNode, UpdateNode, GetNodeByPath, InitRoot } = require("./model/ipfs_tree");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://greenchaindb-default-rtdb.firebaseio.com",
});

function initTree(){
	console.log("Starting the tree")
	/*
	InitRoot("Report")
	InitRoot("Task")
	InitRoot("User")
	InitRoot("Donate")*/
} 

var db = admin.database();
const app = express();
initTree();

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



//
//Report(id,location[address,city,state,country],title,discription,image,userid)

/*{
    "location":{"address":"street_name","city":"city_name","state":"state_name","contry":"contry_name"},
    "title":"Report Title",
    "description":"report description",
    "images":{"0":"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"},
        "userid":"user_id"
}*/

app.post("/create-report", async (req, res) => {
	var report = await AddNode("Report",req.body)
	res.send(report)
});

app.post("/get-reports", async (req, res) => {
	var reports = await GetNodeByPath("Report")
	res.send(reports)
});

app.post("/get-report", async (req, res) => {
	var id = req.body.id;
	var report = await GetNodeByPath("Report/"+id)
	res.send(report)
});



app.post("/root", async (req, res) => {
	await InitRoot("Report")
	await AddNode("Report",{"title":"first report"})
	await AddNode("Report",{"title":"secound report"})
	await AddNode("Report/0",{"task":"task do rafa"})
	await UpdateNode("Report/0/0",{"task":"task atualizada"})
	console.log(await GetNodeByPath("Report/0/0"))
	res.send("success")
});

exports.app = functions.https.onRequest(app);
