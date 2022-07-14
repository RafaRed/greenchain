export async function getCID(cid) {
	const requestOptions = {
		method: "GET",
	};
	return new Promise((resolve, reject) => {
		fetchCidGateways(cid, "file.json")
				.then((data) => {
					resolve(data);
				});
	});
}



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

