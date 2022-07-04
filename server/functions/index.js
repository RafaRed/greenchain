const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { initializeApp } = require("firebase-admin/app");
var admin = require("firebase-admin");
var serviceAccount = require("./config.json");
const rateLimit = require("express-rate-limit");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://greenchaindb-default-rtdb.firebaseio.com"
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


app.post("/", (req, res) => {
    
});

exports.app = functions.https.onRequest(app);