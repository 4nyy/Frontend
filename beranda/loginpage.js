const username = document.getElementById("username")
const password = document.getElementById("password")
const masuk = document.getElementById("masuk")
const loader = document.getElementById("loader")
const container = document.getElementsByClassName("container")
const forgotPass = document.getElementById("fg-pass")
forgotPass.style.display = "none"
loader.style.display = "none"

function login(){
    if (username.value == "admin" && password.value == "admin"){
        container[0].style.filter ="blur(2px)"
        loader.style.display ="block"
        setTimeout (() => {
            document.location ="beranda.html"
            username.value =""
            password.value =""
            container[0].style.filter ="none"
        }, [2000])
    }else {
        container[0].style.filter ="blur(2px)"
        loader.style.display ="block"
        setTimeout (()=> {
            loader.style.display ="none"
            forgotPass.style.display = "block"
            container[0].style.filter ="none"
        }, [2000])
        username.value =""
        password.value =""

    }
}

