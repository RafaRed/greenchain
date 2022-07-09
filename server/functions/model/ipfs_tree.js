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

/**Add node and update the tree */
module.exports.AddNode = async function (path, content) {
	path = path.split("/"); // Split node path
	const cid = await uploadFile(content);
	await module.exports.UpdateTreeParents(path, cid);
    return
};

/**Update the parents points for the new node and new parents hash */
module.exports.UpdateTreeParents = async function (path, new_cid, new_node_id=-1) {
    const path_data = [];	
    await pushRootToPathData(path[0],path_data)
	await pushNodesToPathData(path,path_data)
    const tree = await rebuildNodesPointers(path,path_data,new_cid,new_node_id)
	const id = await module.exports.UpdateRoot(path[0], tree);
    return
};

/**Add root cid and content to path_data */
async function pushRootToPathData(id,path_data){
    const root_cid = await resolveNameService(id);
    const root_content = await module.exports.GetNodeByCid(root_cid);
    path_data.push({"cid":root_cid,"content":root_content,"id":id})
    return
}
/**Add Nodes cid and content to path_data */
async function pushNodesToPathData(path, path_data){
    for (var i = 1; i < path.length; i++) { // Get parents cid's
        var cid = GetCidById(path_data[i-1]['content'],path[i])
        const content = await module.exports.GetNodeByCid(cid);
        path_data.push({"cid":cid,"content":content,"id":path[i]})
	}
    return
}
/** */
async function rebuildNodesPointers(path,path_data,new_cid,new_node_id){
    var point_me = await pointNodeToNewCid(path,path_data,new_cid,new_node_id)
    for (var i = path.length-2; i >= 0 ; i--) {
        const node_content = AppendNodeId(path_data[i]['content'], point_me, path_data[i+1]['id']);
        const node_cid = await uploadFile(node_content);
        point_me = node_cid;
    }
    return point_me
}

async function pointNodeToNewCid(path,path_data,new_cid,new_node_id)
{
    const pointer_content = AppendNodeId(path_data[path.length-1]['content'], new_cid, new_node_id);
    const pointer_cid = await uploadFile(pointer_content);
    return pointer_cid
}


function GetCidById(content,id){
    if ("id" in content) {
        return content["id"][id]
    }
}

function AppendNodeId(content, cid, new_node_id) {

	if ("id" in content) {
        if(new_node_id === -1){
            const last_key = Object.keys(content["id"])[
                Object.keys(content["id"]).length - 1
            ];
            const next_key = parseInt(last_key) + 1;
            content["id"][next_key] = cid;
        }
        else{
            content["id"][new_node_id] = cid;
        }
		
	} else {
		content["id"] = {};
		content["id"]["0"] = cid;
	}
	return content;
}

/*module.exports.UpdateNodeCid = async function (old_cid, new_cid) {
	const old_content = module.exports.GetNodeByCid(old_cid);
	var new_content = old_content;
	const cid = await uploadFile(content);
};*/


module.exports.UpdateNode = async function (path, content) {
	path = path.split("/"); // Split node path
    id = path.pop()
	const cid = await uploadFile(content);
	await module.exports.UpdateTreeParents(path, cid, id);
    return
};

module.exports.GetNodeByPath = async function (path) {
    path = path.split("/"); // Split node path
    id = path.pop()
    const path_data = [];	
    await pushRootToPathData(path[0],path_data)
	await pushNodesToPathData(path,path_data)
    return {"content":path_data[path_data.length-1]["content"], "cid":path_data[path_data.length-1]["cid"]}
};

module.exports.GetNodeByCid = function (cid) {
	return retrieveFile(cid);
};

module.exports.FindNodeByContent = function (path, attr, value) {
	return { cid: "", id: "", content: "" };
};

module.exports.DeleteNode = function (path) {
	return { status: "success" };
};