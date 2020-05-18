var text = {
    "data": [
        "Text1",
        "Text2",
        "Text3",
        "Text4"
    ]
}
var stringifiedText = "";

function clearField() {

    document.getElementById("write-stuff").value = "";
}

function addTextToList(text){
    var text = document.getElementById("write-stuff").value;
    var li = "<li>" + text + "</li>";
    document.getElementById("my-list").appendChild(li);
}

function preLoadedText() {
    stringifiedText = JSON.stringify(text.data);
    document.getElementById("bottomBox").onload( loadText);
}

function loadText() {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("my-list").appendChild(node);
}


