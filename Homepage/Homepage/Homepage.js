// import navbar from '../component/navbar.js'

// document.getElementById("n").innerHTML = navbar();
// console.log(navbar());


var i = 0;
function sliedshow(){
    let image1 = "https://images-static.nykaa.com/uploads/38bdc254-2379-469a-96de-a00193d6a6fb.gif?tr=w-1200,cm-pad_resize"
    let image2 = "https://images-static.nykaa.com/uploads/22273223-d6a6-4755-9a4e-ee58bb873c4c.gif?tr=w-1200,cm-pad_resize"
    let image3 =  "https://images-static.nykaa.com/uploads/9d70ca26-cc3d-4a42-bfd6-3e547d1d51ce.gif?tr=w-1200,cm-pad_resize"
    let image4 =  "https://images-static.nykaa.com/uploads/0c76c6de-2aba-467f-9ed7-043088e0ced7.jpg?tr=w-1200,cm-pad_resize"
    let image5 =  "https://images-static.nykaa.com/uploads/fd66625a-0a30-4525-a5b3-45c0e2ae22cd.jpg?tr=w-1200,cm-pad_resize"
    let image6 =  "https://images-static.nykaa.com/uploads/457242f1-d4b3-41ee-b33a-3d87dd755fe4.jpg?tr=w-1200,cm-pad_resize"
    let image7 =  "https://images-static.nykaa.com/uploads/e46581fc-3321-4a06-8e27-7d760c1696e5.jpg?tr=w-1200,cm-pad_resize"

    let empty_arr = [];
     
    empty_arr.push(image1);
    empty_arr.push(image2);
    empty_arr.push(image3);
    empty_arr.push(image4);
    empty_arr.push(image5);
    empty_arr.push(image6);
    empty_arr.push(image7);

    // localStorage.getItem("poster",JSON.stringify(empty_arr))

    let container = document.getElementById("crusol");
    let img = document.createElement("img")
    img.setAttribute("id", "posterimage")

    setInterval(function(){
   if(i === empty_arr.length-1) {
    i = 0;
   }
    img.src = empty_arr[i];
    container.append(img)
    i++;
},2000);
}

sliedshow();

var flag = 0;
function controler(x){
  console.log("click")
   flag = flag + x;
   console.log(flag);
   slideshowicon(flag)
}

// slideshowicon(flag)

function slideshowicon(num){
  let sli = document.getElementsByClassName("firslide")
  console.log(sli)
 
  if(num === sli.length)
  {
    flag = 0;
    num = 0;
  } else if(num < 0)
  {
    flag = sli.length-1;
    num = sli.length-1;
  }
 
  for(let y of sli){
    y.style.display = 'none';
  }
  
 sli[num].style.display = 'block';
 sli[num].style.display = 'flex';
 
}
