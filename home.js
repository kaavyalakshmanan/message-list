function clearField() {

    document.getElementById("write-stuff").value = "";
}

function addTextToList(text){
    var text = document.getElementById("write-stuff").value;
    document.getElementById("bottomBox").innerHTML = text;
}
