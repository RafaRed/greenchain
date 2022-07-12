const { Web3Storage, File } = require("web3.storage");
const Name = require("web3.storage/name");
const fs = require("fs");
const fetch = require("node-fetch");
const { resolve } = require("path");
const { promises: Fs } = require('fs')



module.exports.createNameService = async function (_name, _content, path = "./tree/") {
	var cid = await module.exports.uploadFile(_content)
	const name = await Name.create()
	fs.promises.writeFile(path + _name + ".key", name.key.bytes);
	const client = makeStorageClient();
	const revision = await Name.v0(name, cid)
	const public = await Name.publish(client, revision, name.key)
	return name.toString()
}

module.exports.updateNameService = async function (_name, _value, path = "./tree/") {
	const client = makeStorageClient();
	const bkey = await fs.promises.readFile(path + _name + '.key')
	const name = await Name.from(bkey);
	const revision = await Name.resolve(client, name)
	const nextRevision = await Name.increment(revision, _value)
	await Name.publish(client, nextRevision, name.key)
	return name.toString()
}

module.exports.uploadFile = async function (_value, _filename = "file.json") {
	var files = makeFileObjects(_value, _filename);
	var cid = await storeFiles(files)
	return cid;
}

module.exports.retrieveFile = async function (cid, filename = "file.json") {

	return new Promise((resolve, reject) => {
		const url = "https://" + cid + '.ipfs.dweb.link/' + filename
		fetch(url)
			.then(response => response.json())
			.then(data => {
				resolve(data);
			});
	})
}

module.exports.resolveNameService = async function (_name, path = "./tree/") {
	const client = makeStorageClient();
	const bkey = await fs.promises.readFile(path + _name + '.key')
	const name = await Name.from(bkey);
	const revision = await Name.resolve(client, name)
	console.log(_name + "----->" + revision.value + "| " + name)
	return revision.value
}

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
	const file = path + key + ".key"

	try {
		await Fs.access(file)
		return false
	} catch {
		return true
	}
}