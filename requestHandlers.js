function start() {
    console.log("Request handler for start");
    return "Hello Start";
}

function upload() {
    console.log("Request handler for upload");
    return "Hello Upload";
}

exports.start = start;
exports.upload = upload;