const contentNew = document.getElementById("content-new")
const input = document.getElementById("input")
const list = document.getElementById("list")


contentNew.style.display = "none"
function newlist() {
    contentNew.style.display = "block"
}

function save (){
    let div =  document.createElement("div")
    div.style.width="300px"
    div.style.height="200px"
    div.style.background="pink"
    list.append(div)
    var li = document.createElement("p"); // creates an element "li"
    li.appendChild(document.createTextNode(input.value));
    div.append(li)
    input.value = "";
}
 
 