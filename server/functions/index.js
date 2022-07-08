const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { initializeApp } = require("firebase-admin/app");
var admin = require("firebase-admin");
var serviceAccount = require("./config.json");
const rateLimit = require("express-rate-limit");
const {
	getAccessToken,
	makeStorageClient,
	uploadStringToJsonFile,
	retrieveFile,
	getName,
	publishContent,
	generateNameKey,
} = require("./model/ipfs");
const { CreateRoot, AddNode } = require("./model/ipfs_tree");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://greenchaindb-default-rtdb.firebaseio.com",
});

//initializeApp();
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

app.post("/ipfs-post", (req, res) => {
	var _data = req.body.data;
	console.log(_data);
	var _filename =
		req.body.filename !== undefined ? req.body.filename : "file.json";
	var cid = uploadStringToJsonFile(_data, _filename);
	cid.then((file_cid) => {
		res.send(file_cid);
	});
});

app.post("/ipfs-get", (req, res) => {
	var _cid = req.body.cid;
	var _filename =
		req.body.filename !== undefined ? req.body.filename : "file.json";
	var file = retrieveFile(_cid, _filename);
	file.then((content) => {
		res.send(content);
	});
});

app.post("/root", (req, res) => {
	//CreateRoot("Report")
	AddNode("Report",{"title":"report title 3"})
});

app.post("/getname", (req, res) => {
	getName().then((result) => {
		res.send(result);
	});
	
});

app.post("/generatekey", (req, res) => {
	generateNameKey();
	res.send("done")
});

exports.app = functions.https.onRequest(app);
