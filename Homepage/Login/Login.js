// import navbar from '../component/navbar.js'
// import footer from '../Component2/footer.js'

// document.getElementById("n").innerHTML = navbar();
// console.log(navbar());
// document.getElementById("footer").innerHTML = footer();



var flag = true;
function verifydetail(event){
    event.preventDefault();
    // console.log("clicked me");

    let form = document.getElementById("form")
    let login_email = form.email.value;
    let login_pass = form.password.value;
    // console.log(login_email,login_pass);
    

    let finaldata = JSON.parse(localStorage.getItem("userdetail")) || [];
 
    finaldata.map(function(elem){
        console.log(elem.email, elem.password);

       if( login_email === elem.email && login_pass === elem.password){
        window.location.href = "../Homepage/Homepage.html"
        flag = false;
       }

    })
    if(flag === true)
    {
     alert("Wrong Credential please enter correct email & password")
    }

}