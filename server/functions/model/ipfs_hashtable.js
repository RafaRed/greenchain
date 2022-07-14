const {
    createNameService,
    updateNameService,
    uploadFile,
    retrieveFile,
    resolveNameService,
    checkKeyNotExist,
} = require("./ipfs_connect");


module.exports.InitHashtable = async function (name, content = {}) {
    if (await checkKeyNotExist(name, "./hashtable/")) {
        return await createNameService(name, content, "./hashtable/");
    }
    return;
};

async function UpdateHashtableNamespace(name, cid) {
    return await updateNameService(name, cid, "./hashtable/");
}

async function GetHashtableCid(name) {
    const root_cid = await resolveNameService(name, "./hashtable/");
    return root_cid
}

module.exports.GetHashtableData = async function (name) {
    var cid = await GetHashtableCid(name);
    var data = await retrieveFile(cid);
    return data
}

module.exports.FindHashtableByKey = async function (name, key) {
    var data = await module.exports.GetHashtableData(name)
    return data[key]
}

module.exports.FindHashtableByValue = async function (name, value) {
    var data = await module.exports.GetHashtableData(name)
    for (var key in data) {
        if (data[key] === value) {
            return key;
        }
    }
    return undefined;
}

module.exports.UpdateHashtable = async function (name, key, value) {
    var data = await module.exports.GetHashtableData(name)
    console.log(data)
    console.log(value)
    data[key] = value;
    console.log(data)
    const new_cid = await uploadFile(data);
    console.log(new_cid)
    await UpdateHashtableNamespace(name, new_cid)
    return
};