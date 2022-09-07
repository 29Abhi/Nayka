// import navbar from '../component/navbar.js'
// // import footer from '../Component2/footer.js'

// document.getElementById("n").innerHTML = navbar();
// console.log(navbar());
// document.getElementById("footer").innerHTML = footer();



function signup(name,email,password){
    this.name = name;
    this.email = email;
    this.password = password
}

function submitdata(event){
    event.preventDefault();
    console.log("clicked me")
    let form = document.getElementById("form")

    let name = form.name.value;
    let email = form.email.value;
    let password = form.password.value;
    
    let userdata = new signup(name, email, password)

    let user = JSON.parse(localStorage.getItem("userdetail")) || [];
    user.push(userdata)

    localStorage.setItem("userdetail",JSON.stringify(user))
    window.location.href = "../Login/Login.html";
}