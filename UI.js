let data;
(function getInfo(){
    let requestURL = "test_data.json";
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
        data = request.response;
        console.log(data["case 1"]["count"]);
    }
})()
function injectFunction(num){
    var content;
    var inject = document.getElementsByClassName("txtSection")[0];
    switch(num){
        case 0:
            content = feature1_inject();
            break;
        case 1:
            content = "THIS IS TEST FEATURE 2";
            break;
        case 2:
            content = "THIS IS TEST FEATURE 3";
            break;
        case 3:
            content = "THIS IS TEST FEATURE 4";
            break;
        default:
            content = "THIS IS A FEATURE";
    }
    inject.innerHTML = content;
}

function feature1_inject(){
    var content = `
        <image class="modalImage" src="/images/presentation.png"></image>
        <div id = "injectID" class="injectContent">
        </div>
    `;

    document.getElementsByClassName("injectContent").innerHTML = data["case 1"]["count"];

    return content;
};