function makeBlob(response) {
    return response.blob();
}

function insertLogo(blob) {
    var container = document.getElementById("picture");
    var imgElem = document.createElement("img");
    container.innerHTML = "";
    container.appendChild(imgElem);
    var imgUrl = URL.createObjectURL(blob);
    imgElem.src = imgUrl;
}

function insertVideo(blob) {
    var container = document.getElementById("vid");
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
    var mheaders = new Headers({
        'Content-Type': 'image/png'
    });

    var init = {
        method: 'GET',
        headers: mheaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(pathToResource, init);

    fetch(myRequest)
        .then(makeBlob)
        .then(insertImage)
        .catch( function (reason) {
            console.log(reason);
        })
    ;
}

function fetchVideo(path) {

    var mheaders = new Headers({
        'Content-Type': 'video/mp4'
    });

    var init = {
        method: 'GET',
        headers: mheaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(path, init);

    fetch(myRequest)
        .then(makeBlob)
        .then(insertVideo)
        .catch(function (reason) {
            console.log(reason);
        });
}

function fetchLogo(pathToResource){
    var mheaders = new Headers({
        'Content-Type': 'image/png'
    });

    var init = {
        method: 'GET',
        headers: mheaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(pathToResource, init);

    fetch(myRequest)
        .then(makeBlob)
        .then(insertLogo)
        .catch( function (reason) {
            console.log(reason);
        })
    ;
}