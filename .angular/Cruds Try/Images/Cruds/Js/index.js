// var lolo=document.querySelector(".lolo")
// var loloitem=document.querySelector(".loloitem")
// var imgs=Array.from(document.querySelectorAll("img"))
// var nextbtn=document.querySelector(".nextbtn")
// var prevbtn=document.querySelector(".prevbtn")
// var closedbtn=document.querySelector(".closedbtn")
// var currentindex



// for(var i=0;i<imgs.length;i++){

//     imgs[i].addEventListener("click",function(e){
//         lolo.classList.replace("d-none","d-flex")
//         secsrc=e.target.getAttribute("src")
//         loloitem.style.backgroundImage=`url(${secsrc})`
//         currentindex=imgs.indexOf(e.target)
//     })
// }



// function next(){
//     currentindex++;
//     if(currentindex==imgs.length){
//         currentindex=0
//     }
//     var ssrc=imgs[currentindex].getAttribute("src")
//     loloitem.style.backgroundImage=`url(${ssrc})`   
// }

// nextbtn.addEventListener("click",next)



// function prev(){
//     currentindex--
//     if(currentindex==-1){
//         currentindex=imgs.length-1
// }
//     var ssrc=imgs[currentindex].getAttribute("src")
//     loloitem.style.backgroundImage=`url(${ssrc})`
// }
// prevbtn.addEventListener("click",prev)



// function closed(){
//     lolo. classList.replace("d-flex","d-none")
// }
// closedbtn.addEventListener("click",closed)
// lolo.addEventListener("click",closed)

// loloitem.addEventListener("click",function(e){

//     e.stopPropagation()
// })





// function next(){
//     currentindex++;
//     if(currentindex==imgs.length){
//         currentindex=0
//     }
//     var ssrc=imgs[currentindex].getAttribute("src")
//     loloitem.style.backgroundImage=`url(${ssrc})`   
// }

// document.addEventListener("keyup",function(e){
//         if(e.key=="ArrowRight"){
//             next()
//         }   
//         else if(e.key=="ArrowLeft"){
//             prev()
//         }   
//         else if(e.key=="Escape"){
//             closed()
//         }   
//     }
// )





var siteName=document.querySelector("#siteName")
var siteUrl=document.querySelector("#siteUrl")
var subbtn=document.querySelector(".subbtn")
var upbtn=document.querySelector(".upbtn")
var sites=[]

if( localStorage.getItem("Sites")!==null){
    sites=JSON.parse(localStorage.getItem("Sites"))
    display()
}

function add(){
    var site={
        name:siteName.value,
        url:siteUrl.value
    }
    sites.push(site)
    localStorage.setItem("Sites",JSON.stringify(sites))

    clear()
    display()

}

subbtn.addEventListener("click",add)





function clear(){
        siteName.value=null,
       
       
        siteUrl.value=null
}
function display(){
    var cartona=" "

    for(var i=0;i<sites.length;i++){
        cartona+=

` 
        <tr>

        <td>${sites[i]. name}</td>
        <td>${sites[i]. url}</td>
        <td><button class="btn btn-success p-3 rounded-5 fa-solid fa-eye"></button></td> 
        <td><button onclick='del(${i})' class="btn btn-danger p-3 rounded-5 fa-solid fa-trash-can"></button></td>
        <td><button onclick='up(${i})' class="btn btn-warning p-3 rounded-5 fa-solid fa-glasses"></button></td>



        </tr>
          
`
    }
    document.getElementById("Demo").innerHTML=cartona
}




function del(a){
    sites.splice(a, 1)
    localStorage.setItem("Sites",JSON.stringify(sites))
    display()

}
var s
function up(i){
    s=i
    siteName.value=sites[i].name,  
    siteUrl.value=sites[i].url
    localStorage.setItem("Sites",JSON.stringify(sites))
    subbtn.classList.remove("d-none")
    upbtn.classList.add("d-none")
    display()



    

}




 
function updatesProduct(){
    Products[a].Code=ProductNameInput.value
    Products[a].Price=ProductPriceInput.value
    Products[a].Cate=ProductPriceInput.value
    Products[a].Desc=ProductDescInput.value
    localStorage.setItem("Products",JSON.stringify(Products)) 
    Add.classList.remove("d-none")
    Update.classList.add("d-none")
    ClearForm()
 }




