import {navbar} from "../components/navbar.js";

document.getElementById("navbarup").innerHTML=navbar();

import {footer} from "../components/navbar.js";
document.getElementById("footer").innerHTML=footer();

let cartdata=JSON.parse(localStorage.getItem("cart"))||[];

const url1="https://lystprojectglobal.herokuapp.com/api/all_clothing";

async function fetchdata(){

let res=await fetch(url1);

let data=await res.json();

appendata(data);
console.log(data);

}
document.getElementById("allclothing").addEventListener("click",fetchdata);

fetchdata();


function appendata(data){
document.getElementById("datadiv").innerHTML = null
    data.forEach(function(el){

let div=document.createElement("div");
div.setAttribute("id","imgdiv");

let img=document.createElement("img");
img.src=el.image;
img.setAttribute("id","imgdivimg");

let brands=document.createElement("h5");
brands.innerText=el.brand;

let desc=document.createElement("p");
desc.innerText=el.title;

let strikeprice=document.createElement("p");
strikeprice.innerText=el.stprice;
strikeprice.style.textDecoration="line-through"

let actprice=document.createElement("p");
actprice.innerText=`$ ${el.stprice_2}` ;

let discount=document.createElement("p");
discount.innerText=el.discount;

let btn=document.createElement("button");
btn.addEventListener("click",function(){
    btn.innerText="Added To Cart";
    btn.style.backgroundColor="green";
    addtocart(el);
})

btn.innerHTML="Add To Cart";
btn.style.backgroundColor="black";
btn.style.color="white";
// div.append(img,brands);

div.append(img,brands,desc,strikeprice,actprice,discount,btn);

document.getElementById("datadiv").append(div);
    })
   
}

function addtocart(elem){
    cartdata.push(elem);
    localStorage.setItem("cart",JSON.stringify(cartdata));
}
// document.getElementById("datadiv").innerHTML=null;
const url2="https://lystprojectglobal.herokuapp.com/api/beachwear";

async function fetchdata2(){

    let res=await fetch(url2);
    
    let data=await res.json();
    
    appendata2(data);
    console.log(data);
    
    }
    document.getElementById("beachwear").addEventListener("click",fetchdata2);
    
    // fetchdata();
    
    function appendata2(data){
        document.getElementById("datadiv").innerHTML = null
        data.forEach(function(el){
    
    let div=document.createElement("div");
    div.setAttribute("id","imgdiv");
    
    let img=document.createElement("img");
    img.src=el.image ;
    img.setAttribute("id","imgdivimg");
    
    let brands=document.createElement("h5");
    brands.innerText=el.brand;
    
    let desc=document.createElement("p");
    desc.innerText=el.title;

    let strikeprice=document.createElement("p");
    strikeprice.innerText=el.stprice;
    
    let actprice=document.createElement("p");
    actprice.innerText=`$ ${el.stprice_2}`;

    let discount=document.createElement("p");
discount.innerText=el.discount;

    
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
        btn.innerText="Added To Cart";
        btn.style.backgroundColor="green";
        addtocart(el);
    })
    btn.innerHTML="Add To Cart";
    btn.style.backgroundColor="black";
    btn.style.color="white";
    
    div.append(img,brands,desc,strikeprice,actprice,discount,btn);
    
    document.getElementById("datadiv").append(div);

   
        })
    
    }
   

    const url3="https://lystprojectglobal.herokuapp.com/api/coats";

async function fetchdata3(){

    let res=await fetch(url3);
    
    let data=await res.json();
    
    appendata3(data);
    console.log(data);
    
    }
    document.getElementById("coats").addEventListener("click",fetchdata3);
    
    // fetchdata();
    
    function appendata3(data){
        document.getElementById("datadiv").innerHTML=null;
        data.forEach(function(el){
    
    let div=document.createElement("div");
    div.setAttribute("id","imgdiv");
    
    let img=document.createElement("img");
    img.src=el.image ;
    img.setAttribute("id","imgdivimg");
    
    let brands=document.createElement("h5");
    brands.innerText=el.brand;
    
    let desc=document.createElement("p");
    desc.innerText=el.title;

    let strikeprice=document.createElement("p");
    strikeprice.innerText=el.stprice;
    
    let actprice=document.createElement("p");
    actprice.innerText=`$ ${el.stprice_2}`;

    let discount=document.createElement("p");
discount.innerText=el.discount;

    
    let btn=document.createElement("button");
    btn.addEventListener("click",function(){
        btn.innerText="Added To Cart";
        btn.style.backgroundColor="green";
        addtocart(el);
    })
    btn.innerHTML="Add To Cart";
    btn.style.backgroundColor="black";
    btn.style.color="white";
    
    div.append(img,brands,desc,strikeprice,actprice,discount,btn);
    
    document.getElementById("datadiv").append(div);

   
        })
    
    }

    const url4="https://lystprojectglobal.herokuapp.com/api/jackets";
    async function fetchdata4(){
    
        let res=await fetch(url4);
        
        let data=await res.json();
        
        appendata4(data);
        console.log(data);
        
        }
        document.getElementById("jackets").addEventListener("click",fetchdata4);
        
        // fetchdata();
        
        function appendata4(data){
            document.getElementById("datadiv").innerHTML=null;
            data.forEach(function(el){
        
        let div=document.createElement("div");
        div.setAttribute("id","imgdiv");
        
        let img=document.createElement("img");
        img.src=el.image ;
        img.setAttribute("id","imgdivimg");
        
        let brands=document.createElement("h5");
        brands.innerText=el.brand;
        
        let desc=document.createElement("p");
        desc.innerText=el.title;
    
        let strikeprice=document.createElement("p");
        strikeprice.innerText=el.stprice;
        
        let actprice=document.createElement("p");
        actprice.innerText=`$ ${el.stprice_2}`;
    
        let discount=document.createElement("p");
    discount.innerText=el.discount;
    
        
        let btn=document.createElement("button");
        btn.addEventListener("click",function(){
            btn.innerText="Added To Cart";
            btn.style.backgroundColor="green";
            addtocart(el);
        })
        btn.innerHTML="Add To Cart";
        btn.style.backgroundColor="black";
        btn.style.color="white";
        
        div.append(img,brands,desc,strikeprice,actprice,discount,btn);
        
        document.getElementById("datadiv").append(div);
    
       
            })
        
        }

        const url5="https://lystprojectglobal.herokuapp.com/api/sweaters";
        async function fetchdata5(){
        
            let res=await fetch(url5);
            
            let data=await res.json();
            
            appendata5(data);
            console.log(data);
            
            }
            document.getElementById("sweaters").addEventListener("click",fetchdata5);
            
            // fetchdata();
            
            function appendata5(data){
                document.getElementById("datadiv").innerHTML=null;
                data.forEach(function(el){
            
            let div=document.createElement("div");
            div.setAttribute("id","imgdiv");
            
            let img=document.createElement("img");
            img.src=el.image ;
            img.setAttribute("id","imgdivimg");
            
            let brands=document.createElement("h5");
            brands.innerText=el.brand;
            
            let desc=document.createElement("p");
            desc.innerText=el.title;
        
            let strikeprice=document.createElement("p");
            strikeprice.innerText=el.stprice;
            
            let actprice=document.createElement("p");
            actprice.innerText=`$ ${el.stprice_2}`;
        
            let discount=document.createElement("p");
        discount.innerText=el.discount;
        
            
            let btn=document.createElement("button");
            btn.addEventListener("click",function(){
                btn.innerText="Added To Cart";
                btn.style.backgroundColor="green";
                addtocart(el);
            })
            btn.innerHTML="Add To Cart";
            btn.style.backgroundColor="black";
            btn.style.color="white";
            
            div.append(img,brands,desc,strikeprice,actprice,discount,btn);
            
            document.getElementById("datadiv").append(div);
        
           
                })
            
            }

            const url6="https://lystprojectglobal.herokuapp.com/api/nightwears";
            async function fetchdata6(){
            
                let res=await fetch(url6);
                
                let data=await res.json();
                
                appendata6(data);
                console.log(data);
                
                }
                document.getElementById("nightwear").addEventListener("click",fetchdata6);
                
                // fetchdata();
                
                function appendata6(data){
                    document.getElementById("datadiv").innerHTML=null;
                    data.forEach(function(el){
                
                let div=document.createElement("div");
                div.setAttribute("id","imgdiv");
                
                let img=document.createElement("img");
                img.src=el.image ;
                img.setAttribute("id","imgdivimg");
                
                let brands=document.createElement("h5");
                brands.innerText=el.brand;
                
                let desc=document.createElement("p");
                desc.innerText=el.title;
            
                let strikeprice=document.createElement("p");
                strikeprice.innerText=el.stprice;
                
                let actprice=document.createElement("p");
                actprice.innerText=`$ ${el.stprice_2}`;
            
                let discount=document.createElement("p");
            discount.innerText=el.discount;
            
                
                let btn=document.createElement("button");
                btn.addEventListener("click",function(){
                    btn.innerText="Added To Cart";
                    btn.style.backgroundColor="green";
                    addtocart(el);
                })
                btn.innerHTML="Add To Cart";
                btn.style.backgroundColor="black";
                btn.style.color="white";
                
                div.append(img,brands,desc,strikeprice,actprice,discount,btn);
                
                document.getElementById("datadiv").append(div);
            
               
                    })
                
                }