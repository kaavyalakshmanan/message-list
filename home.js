var textLoadedToPage = {
    "data": [
        "A short history: Golden’s were first bred from Scotland in the mid 19th century. This breed was developed as a hunting breed. They first came to North America in the 1920’s where they became popular for their excellent temperament and beautiful appearance. In 1925, the AKC (American Kennel Club) registered the golden retriever as a breed.",
        "The golden retriever is a crossbreed. The breed originates from a Tweed Water Spaniel, which is an extinct breed nowadays, and a Yellow Flat Coated Retriever. This was done back in the 1800’s.",
        "Golden retrievers have a very high tolerance to pain and can tolerate injuries that many other dogs can’t tolerate. That is part of why they make very good rescuers, police and hunting helpers.",
        "As the dog ages, his fur will darken. It’s possible to know exactly what colour the newborn pup will have when he is an adult by looking at the colour at the tip of his ears."
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

function addTextToList(){
    var text = document.getElementById("write-stuff").value;
    var node = document.createElement("LI");
    var textnode = document.createTextNode(text)
    node.appendChild(textnode);
    document.getElementById("my-list").appendChild(node);
}




