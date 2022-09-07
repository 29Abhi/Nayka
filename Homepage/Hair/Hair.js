import navbar from '../component/navbar.js'
import footer from '../Component2/footer.js'

document.getElementById("n").innerHTML = navbar();
console.log(navbar());
document.getElementById("footer").innerHTML = footer();


var data;
async function api(){
    
  try{
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json`

    let reso = await fetch(url);
      data =  await reso.json();
    console.log(data); 
    appenddata(data);
    
  } catch(error)
  {
    console.log(error);
  }
}

api();

let i = 0;
function slideshow(){

    let img1 = 'https://images-static.nykaa.com/uploads/a0f796c9-bf90-463d-bc9f-e7d203827a64.jpg?tr=w-1200,cm-pad_resize'
    let img2 = 'https://images-static.nykaa.com/uploads/84bc9172-dec3-4078-a5ab-f9e93d2498f6.jpg?tr=w-1200,cm-pad_resize'
    let img3 = 'https://images-static.nykaa.com/uploads/b4427f03-b24d-4a88-a730-72b1ff95cc95.jpg?tr=w-1200,cm-pad_resize'
    let img4 = 'https://images-static.nykaa.com/uploads/f2434735-b1ca-4460-b4d7-a536b9706634.jpg?tr=w-1200,cm-pad_resize'
    
    let empty_arr = [];
    empty_arr.push(img1)
    empty_arr.push(img2)
    empty_arr.push(img3)
    empty_arr.push(img4)

    let container = document.getElementById("cerosel")
    let img = document.createElement("img")
    img.setAttribute("id","poster");

    setInterval(() => {
        if(i === empty_arr.length-1)
        {
            i = 0;
        }
        img.src =  empty_arr[i]
        container.append(img);
        i++
    }, 2000);
}
slideshow();

// function  checkCategory(event){
//   event.preventDefault(); 
// //   let data = document.getElementById
//   console.log("clicked")
// }
var storage = JSON.parse(localStorage.getItem("product")) || [];

const appenddata = (data) =>{
    document.getElementById("appendproduct").innerHTML = null;
//    for(var i = 44; i<data.length; i++){
      data.map(function(elem){

      
        let card = document.createElement("div")
        card.setAttribute("id", "card")

        let img = document.createElement("img")
        img.src = elem.image_link;
        img.setAttribute("id","img")

        let title = document.createElement("h3")
        title.setAttribute("id", "title")
        title.textContent = elem.name;
       
        let price = document.createElement("h4")
        price.setAttribute("id", 'price')
        price.textContent = Math.floor(80*(elem.price));
         

        let sign = document.createElement('h4')
        sign.setAttribute("id",'sign')
        sign.textContent = elem.price_sign;
        // sign = "Price - ₹";  

        let rating = document.createElement("h6")
        rating.setAttribute("id","product_rating")
        rating.textContent = elem.description;

        let producttype = document.createElement("h5")
        producttype.setAttribute("id","type")
        producttype.textContent = elem.product_type;


        let btn = document.createElement("button")
        btn.setAttribute("id","buttonpre")
        btn.innerText = "Add to bag"
        btn.addEventListener("click", function(){
            addtocheck(elem);
        })
        

        // let product_color = document.createElement("div")
        // product_color.innerText = elem.product_colors.hex_value
        // console.log( product_color)
        card.append(img,title,price,sign,producttype,btn)

        let mainbox = document.getElementById("appendproduct")
        mainbox.append(card);
        
    })

}



function addtocheck(elem){
    storage.push(elem)
    localStorage.setItem("product",JSON.stringify(storage));
}

function checkCategory(event){
   event.preventDefault();
let form = document.getElementById("form")

let pencil = form.Category.value;
// console.log(pencil);
   filterdata(pencil);

}
    
function filterdata(pencil){
    console.log(pencil);
      let copy_data = data;
      copy_data =  copy_data.filter(function(elem){
        return elem.category ===  pencil;
  });
  console.log(copy_data);
  appenddata(copy_data);

}

function filterdatalh(){
    console.log(data);
data = data.sort(function(a,b){
    return (a.price - b.price);
    
   })
   appenddata(data);
}

function filterdatahl(){
    data = data.sort(function(a,b){
        return (b.price - a.price);
        
       })
       console.log(data);
       appenddata(data);
    }

    function checkPrice(event){
        event.preventDefault();
        // console.log("clicked")
        let form1 = document.getElementById("form1")
       
        let price = form1.prices.value;
        filterprice(price);
    }

    function filterprice(price){
      console.log(price);
      let price_copy = data;
      // console.log(data);
      price_copy = price_copy.filter(function(el){
        if((80*(el.price)) < price && (80*(el.price)) >= price-100){
          return (price_copy)
        }
      })
      console.log(price_copy);
      appenddata(price_copy);
    }

    function checkBrand(event){
      event.preventDefault();
      let form = document.getElementById("form2")

      let brand = form.brand.value;
      filterbrand(brand);
    }

     function filterbrand(brand){
      let copy_brand = data;
      copy_brand = copy_brand.filter(function(el){
        return el.brand === brand;
      })
      console.log(copy_brand);
      appenddata(copy_brand);
    };

    function checkProduct(event){
      event.preventDefault();
      let form = document.getElementById("form3")

      let product = form.product.value;
      filterproduct(product);
    }

    function filterproduct(product){
      let copy_product = data;
      copy_product = copy_product.filter(function(el){
        return el.product_type === product;
      })
      console.log(copy_product);
      appenddata(copy_product);
    }

    function filterdataaz(){
      data = data.sort(function(a, b) { return (a.brand > b.brand ? 1 : (a.brand === b.brand ? 0 : -1)) })
        
       console.log(data);
       appenddata(data);
    }

    function filterdataza(){
      data = data.sort(function(a, b) { return (a.brand < b.brand ? 1 : (a.brand === b.brand ? 0 : -1)) })
        
       console.log(data);
       appenddata(data);
    }



