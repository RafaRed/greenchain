const {
	createNameService,
	updateNameService,
	uploadFile,
	retrieveFile,
	resolveNameService,
} = require("./ipfs_connect");

module.exports.CreateRoot = function (name, content = {}) {
	return createNameService(name, content);
};

module.exports.UpdateRoot = async function (name, value = {}) {
	return await updateNameService(name, value);
};

module.exports.UpdateNodeParents = async function (path, new_cid) {
	for (var i = path.length; i > 0; i--) { // REVERSE ORDER
        // GET PATH[i] CID 
        // UPDATE path[i] pointers
        // OVERWRITE ID
    }

	const root_cid = await resolveNameService(path[0]);
	const old_root_content = await module.exports.GetNodeByCid(root_cid);
    const new_root_content = AppendNodeId(old_root_content,new_cid)
    const new_root_cid = await uploadFile(new_root_content);
    const id = await module.exports.UpdateRoot(path[0], new_root_cid);
    console.log(id)
    // NOT ALLOW DUPLICATIONS??
};

 function AppendNodeId(content, cid) {
	if ("id" in content) {
        const last_key = Object.keys(content['id'])[Object.keys(content['id']).length - 1]
        console.log(last_key)
        const next_key = parseInt(last_key) + 1
		content["id"][next_key] = cid;
	} else {
        content['id'] = {}
		content["id"]["0"] = cid;
	}
	return content;
};

module.exports.UpdateNodeCid = async function (old_cid, new_cid) {
	const old_content = module.exports.GetNodeByCid(old_cid);
	var new_content = old_content;
	const cid = await uploadFile(content);
};

module.exports.AddNode = async function (path, content) {
	path = path.split("/");
	const cid = await uploadFile(content);
	module.exports.UpdateNodeParents(path,cid);
};

module.exports.UpdateNode = function (path, content) {
	return { cid: "" };
};

module.exports.GetNodeByPath = function (path) {};

module.exports.GetNodeByCid = function (cid) {
	return retrieveFile(cid);
};

module.exports.FindNodeByContent = function (path, attr, value) {
	return { cid: "", id: "", content: "" };
};

module.exports.DeleteNode = function (path) {
	return { status: "success" };
};
