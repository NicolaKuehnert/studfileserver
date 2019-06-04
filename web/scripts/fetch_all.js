function makeBlob(response) {
    return response.blob();
}

function insertVideo(blob) {
    var container = document.getElementById("vd");
    var srcElem = document.createElement("source");
    container.innerHTML = "";
    container.appendChild(srcElem);
    var imgUrl = URL.createObjectURL(blob);
    srcElem.src = imgUrl;
    srcElem.type="video/mp4";
}

function insertImage(blob) {
    var container = document.getElementById("container");
    var imgElem = document.createElement("img");
    container.innerHTML = "";
    container.appendChild(imgElem);
    var imgUrl = URL.createObjectURL(blob);
    imgElem.src = imgUrl;
}

function fetchImage(pathToResource){
    fetch(pathToResource)
        .then(makeBlob)
        .then(insertImage)
        .catch( function (reason) {
            console.log(reason);
        })
    ;
}

function fetchVideo(path) {
    fetch(path)
        .then(makeBlob)
}