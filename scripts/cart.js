import {navbar} from "../components/navbar.js";

document.getElementById("navbarup").innerHTML=navbar();

var cartdata=JSON.parse(localStorage.getItem("cart"));

cartdata.map(function(el){

var box=document.createElement("div");

var img=document.createElement("img");
img.src=el.image;

var brand=document.createElement("h5");
brand.innerText=el.brand;

var title=document.createElement("p");
title.innerText=el.title;

var price=document.createElement("p");
price.innerText=`$ ${el.stprice_2}`;

var btn=document.createElement("button");
btn.innerHTML="Remove";
btn.style.backgroundColor="red";
btn.style.color="white";
btn.addEventListener("click",function(){
    removeitem(el.index);
})

box.append(img,brand,title,price,btn);


document.getElementById("datadiv").append(box);

});

function removeitem(el,index){
    cartdata.splice(index,1);
localStorage.setItem("cart",JSON.stringify(cartdata));

window.location.reload();

}


var total=cartdata.reduce(function(sum,el){
    let convertinr=+(el.stprice_2)*75;
    
    // return sum+Number(el.stprice_2);
    return sum+convertinr;

},0);

var totalindollar=cartdata.reduce(function(sum,el){
    return sum+Math.abs(Number(el.stprice_2));
},0);


var length=cartdata.length;

document.getElementById("totalcart").innerText=`ITEMS ADDED: ${length}`;
document.getElementById("total").innerText=`TOTAL PRICE  IN RS. ${total}`;

document.getElementById("totalindollar").innerText=`TOTAL PRICE IN $ ${totalindollar}`;