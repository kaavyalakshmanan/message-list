var textLoadedToPage = {
    "data": [
        "They Are Extremely Smart Dogs.",
    "Their Name Comes From Their Home Region.",
    "They Are Champion Herders.",
    "Queen Victoria Loved Them."
    ]
}

function clearField() {
    document.getElementById("write-stuff").value = "";
}

function loadText() {
    textLoadedToPage.data.forEach(v => {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(v)
        node.appendChild(textnode);
        document.getElementById("my-list").appendChild(node);
        var linebreak = document.createElement("br");
        document.getElementById("my-list").appendChild(linebreak);
})
}

function hideList() {
    var x = document.getElementById("my-list");
    x.style.display = "none";
}

function showList() {
    var x = document.getElementById("my-list");
    x.style.display = "block";
}

function addTextToList() {
    var text = document.getElementById("write-stuff").value;    
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text)
    node.appendChild(textnode);
    document.getElementById("my-list").appendChild(node);
    var linebreak = document.createElement("br");
    document.getElementById("my-list").appendChild(linebreak);
    
}

function deleteLastElem() {
    let list = document.getElementById("my-list");
    var lastElem = list.childNodes.length-2
    list.removeChild(list.childNodes[lastElem])

}






