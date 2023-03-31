const contentNew = document.getElementById("content-new")
const input = document.getElementById("input")
const list = document.getElementById("list")

contentNew.style.display = "none"
function newlist() {
    contentNew.style.display = "block"
}

const data = []
const pemasukanData = () => {
    data.push(input.value)
    console.log(data)
}

function save() {
    if (input.value) {
        pemasukanData()
        let div = document.createElement("div")
        div.style.width = "300px"
        div.style.borderRadius = "10px"
        div.style.padding = "20px"
        div.style.margin = "10px"
        div.style.height = "auto"
        div.style.background = "pink"
        div.style.overflow = "auto"
        list.append(div)
        var li = document.createElement("p"); // creates an element "li"
        li.appendChild(document.createTextNode(input.value));
        div.append(li)
        input.value = "";
    }else if (input.value == ""){
        alert("input value nya kosong")
    }
}

