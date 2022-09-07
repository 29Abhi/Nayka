



const data = JSON.parse(localStorage.getItem("aboutdata")) || [];

let maindiv = document.getElementById("maindiv");

const selectdata = JSON.parse(localStorage.getItem("product")) || [];
 

const appendproduct = (data) => {
    maindiv.innerHTML = null;

    let card = document.createElement("div")
    card.setAttribute('id',"card")

    let img = document.createElement("img")
    img.src = data.image_link;
    img.setAttribute('id',"image")

    let price = document.createElement("h4")
    price.setAttribute('id', "price")
    price.textContent = data.price
    price.textContent = Math.floor(80*(data.price));
   
    let sign = document.createElement('h4')
    sign.setAttribute("id",'sign')
    sign.textContent = data.price_sign;

    let title = document.createElement("h1")
    title.textContent = data.name
    title.setAttribute("id","title")

    let producttype = document.createElement("h5")
    producttype.setAttribute("id","type")
    producttype.textContent = data.product_type;


    let brand = document.createElement("h1")
    brand.setAttribute('id','brand')
    brand.textContent = data.brand;

    let category = document.createElement("h3")
    category.textContent = data.category;
    category.setAttribute('id','category')

    let discri = document.createElement("h4")
     discri.textContent = data.description;
    discri.setAttribute('id','discri')

    let btn = document.createElement("button")
    btn.setAttribute("id","add")
    btn.innerText = "Add to bag"
    btn.addEventListener("click", function(){
        addtocheck(data);
    })

    card.append(img,title,sign,price,producttype,brand,category,discri,btn)

    maindiv.append(card);
    

   
} 
appendproduct(data);

function pin(event){
    event.preventDefault();
   let form = document.getElementById("forms")
   let pincode = form.pincode.value;
   console.log(pincode);

   if(pincode.length === 6)
   {
    alert("You Location is available for delivery")
   } else {
    alert("You Location is not available for delivery")
   }
   
}
function addtocheck(elem){
    selectdata.push(elem)
    localStorage.setItem("product",JSON.stringify(selectdata));
    window.location.href = "../Carts/Cart.html"
}
   