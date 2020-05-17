function clearField() {

    document.getElementById("write-stuff").value = "";
}

function addTextToList(text){
    var text = document.getElementById("write-stuff").value;
    var li = "<li>" + text + "</li>";
    document.getElementById("my-list").appendChild(li);
}
