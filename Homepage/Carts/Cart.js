



let cart = JSON.parse(localStorage.getItem("product")) || [];
console.log(cart);

let cart_div = document.getElementById("cartfinal")
let cutprice = null;
let totalitem = document.getElementById("totalitem");
let totalprice = document.getElementById("totalprice");

let costprice = 0;
let item = 0;

const appendcart = (cart) => {
    cart_div.innerHTML = null;
    totalprice.innerHTML = null;
    totalitem.innerHTML = null;

    console.log("click")

    cart.map(function(elem,indx){

        let card = document.createElement("div")
        card.setAttribute("id",'card')

        let img = document.createElement("img")
        img.src = elem.image_link;
        img.setAttribute("id","img")

        let title = document.createElement("h2")
        title.setAttribute("id", "title")
        title.textContent = elem.name;
       
        let price = document.createElement("h4")
        price.setAttribute("id", 'price1')
        price.textContent = Math.floor(80*(elem.price));
         

        let sign = document.createElement('h4')
        sign.setAttribute("id",'sign1')
        sign.textContent = elem.price_sign;
        // sign = "Price - ₹";  

        let btn = document.createElement("button")
        btn.setAttribute("id","buttonpre1")
        btn.innerText = "Remove"
        btn.addEventListener("click", function(){
            remove(elem,indx);
        }) 

        card.append(img,title,price,sign,btn)
        cart_div.append(card);

        costprice = costprice + Math.floor(80*(elem.price));
        item  = cart.length;
        // console.log(costprice,item)
    })
  
}
appendcart(cart);

totalitem.innerText = item;
totalprice.innerText =  costprice


function remove(elem,indx){
cart.splice(indx,1)
localStorage.setItem("product",JSON.stringify(cart))
window.location.reload();

}

function discoupon(event){
    event.preventDefault();
    let form = document.getElementById("costform")
    
    let code = form.coupon.value;
    console.log(code);
    let applycode = "CODE80"

    if(code === applycode)
    {
        costprice = costprice - costprice/100*80;
        console.log(costprice)
        totalprice.innerText =  costprice
       
    } else{
        alert("wrong coupon code")
    }
}

function proceed(){
    alert("your order is sucessful")
}