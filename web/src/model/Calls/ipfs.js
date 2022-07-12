export async function getCID(cid) {
	const requestOptions = {
		method: "GET",
	};
	return new Promise((resolve, reject) => {
		fetch("https://ipfs.io/ipfs/"+cid+"/file.json", requestOptions)
			.then((response) => response.json())
			.then((data) => resolve(data));
	});
}
