const { Web3Storage, File } = require("web3.storage");
const Name = require("web3.storage/name");
const fs = require("fs");
const fetch = require("node-fetch");
const { resolve } = require("path");

function getAccessToken() {
	let rawdata = fs.readFileSync("ipfs.json");
	let ipfs_config = JSON.parse(rawdata);
	return ipfs_config["api-key"];
}

function getNameToken() {
	let rawdata = fs.readFileSync("ipfs.json");
	let ipfs_config = JSON.parse(rawdata);
	return ipfs_config["name"];
}

function makeStorageClient() {
	return new Web3Storage({ token: getAccessToken() });
}


function makeFileObjects(_data, _filename) {
	const obj = _data;
	const buffer = Buffer.from(JSON.stringify(obj));
	const files = [new File([buffer], _filename)];
	return files;
}

async function storeFiles(files) {
	const client = makeStorageClient();
	client
	const cid = await client.put(files);
	console.log("stored files with cid:", cid);
	return cid;
}

module.exports.uploadStringToJsonFile = function (_string, _filename) {
	var files = makeFileObjects(_string, _filename);
	var cid = storeFiles(files);
	return cid;
};


module.exports.retrieveFile = async function (cid, filename) {
   
    return new Promise((resolve,reject)=>{
        const url = "https://"+cid+'.ipfs.dweb.link/'+filename
        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            resolve(data);
        });
    })
  }

  module.exports.getName = async function (){
	return new Promise((resolve,reject)=>{
	Name.create().then((name)=>{
		resolve(name)
	})
	});
  }

  module.exports.generateNameKey = async function (){
	
	Name.create().then(name=>{
		//console.log(name.key)
		fs.promises.writeFile('priv.key', name.key.bytes)
	})
		
  }

  module.exports.publishContent = function (_value){
	const client = makeStorageClient();
	fs.promises.readFile('priv.key').then(bkey =>{
		Name.from(bkey).then(name => {
			Name.v0(name, _value).then((revision)=>{
				Name.publish(client, revision, name.key).then(publish =>{
					console.log(name.toString())
					resolve("published")
				})
			})
		})

	})
  }