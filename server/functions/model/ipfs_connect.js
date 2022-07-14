const { Web3Storage, File } = require("web3.storage");
const Name = require("web3.storage/name");
const fs = require("fs");
const fetch = require("node-fetch");
const { resolve } = require("path");
const { promises: Fs } = require("fs");
var cidCache = {};
var max_cache = 150;

function loadFromCache(cid) {
	if (cid in cidCache) {
		console.log("### Loaded " + cid + "from cache. ###");
		return cidCache[cid];
	} else {
		return null;
	}
}

function saveOnCache(cid, value) {
	if (cidCache.length > max_cache) {
		cidCache = {};
	}
	cidCache[cid] = value;
}

module.exports.createNameService = async function (
	_name,
	_content,
	path = "./tree/"
) {
	var cid = await module.exports.uploadFile(_content);
	const name = await Name.create();
	fs.promises.writeFile(path + _name + ".key", name.key.bytes);
	const client = makeStorageClient();
	const revision = await Name.v0(name, cid);
	const public = await Name.publish(client, revision, name.key);
	return name.toString();
};

module.exports.updateNameService = async function (
	_name,
	_value,
	path = "./tree/"
) {
	const client = makeStorageClient();
	const bkey = await fs.promises.readFile(path + _name + ".key");
	const name = await Name.from(bkey);
	const revision = await Name.resolve(client, name);
	const nextRevision = await Name.increment(revision, _value);
	await Name.publish(client, nextRevision, name.key);
	return name.toString();
};

module.exports.uploadFile = async function (_value, _filename = "file.json") {
	var files = makeFileObjects(_value, _filename);
	var cid = await storeFiles(files);
	saveOnCache(cid, _value);
	return cid;
};

module.exports.retrieveFile = async function (cid, filename = "file.json") {
	return new Promise((resolve, reject) => {
		var data = loadFromCache(cid);
		if (data !== null) {
			resolve(data);
		} else {
			fetchCidGateways(cid, filename)
				.then((data) => {
					saveOnCache(cid, data);
					resolve(data);
				});
		}
	});
};

async function fetchCidGateways(cid, filename) {
	return new Promise((resolve,reject)=>{
		fetchFromDweb(cid, filename)
		.then((response) =>  response.json())
		.catch(() => fetchFromIpfsIo(cid, filename)
			.then((response) =>  response.json())
		)
		.catch(() => fetchFromInfura(cid, filename)
			.then((response) => response.json())
		)
		.catch(() => fetchFromCf(cid, filename)
			.then((response) => response.json())
		)
		.catch(() => fetchFromGatewayCloud(cid, filename)
			.then((response) => response.json())
		)
		.catch(() => fetchFrom4everland(cid, filename)
			.then((response) => response.json())
		)
		.then(data => {
			resolve(data)
		})
	})
	
}

async function fetchFromDweb(cid, filename) {
	return new Promise((resolve,reject)=>{
		const url = "https://" + cid + ".ipfs.dweb.link/" + filename;
		fetch(url).then(data => resolve(data));
	})
}
async function fetchFromIpfsIo(cid, filename) {
	return new Promise((resolve,reject)=>{
		const url = "https://ipfs.io/ipfs/" + cid + "/" + filename;
		fetch(url).then(data => resolve(data));
	})
}
async function fetchFromInfura(cid, filename) {
	return new Promise((resolve,reject)=>{
		const url = "https://"+ cid + ".ipfs.infura-ipfs.io/" + filename;
		fetch(url).then(data => resolve(data));
	})
}

async function fetchFromCf(cid, filename) {
	return new Promise((resolve,reject)=>{
		const url = "https://"+ cid + ".ipfs.cf-ipfs.com/" + filename;
		fetch(url).then(data => resolve(data));
	})
}

async function fetchFromGatewayCloud(cid, filename) {
	return new Promise((resolve,reject)=>{
		const url = "https://"+ cid + ".ipfs.ipfs-gateway.cloud/" + filename;
		fetch(url).then(data => resolve(data));
	})
}

async function fetchFrom4everland(cid, filename) {
	return new Promise((resolve,reject)=>{
		const url = "https://"+ cid + ".ipfs.4everland.io/" + filename;
		fetch(url).then(data => resolve(data));
	})
}




module.exports.resolveNameService = async function (_name, path = "./tree/") {
	const client = makeStorageClient();
	const bkey = await fs.promises.readFile(path + _name + ".key");
	const name = await Name.from(bkey);
	const revision = await Name.resolve(client, name);
	console.log(_name + "----->" + revision.value + "| " + name);
	return revision.value;
};

function getAccessToken() {
	let rawdata = fs.readFileSync("ipfs.json");
	let ipfs_config = JSON.parse(rawdata);
	return ipfs_config["api-key"];
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
	const cid = await client.put(files);
	return cid;
}

function getAccessToken() {
	let rawdata = fs.readFileSync("ipfs.json");
	let ipfs_config = JSON.parse(rawdata);
	return ipfs_config["api-key"];
}

module.exports.checkKeyNotExist = async function (key, path = "./tree/") {
	const file = path + key + ".key";

	try {
		await Fs.access(file);
		return false;
	} catch {
		return true;
	}
};
