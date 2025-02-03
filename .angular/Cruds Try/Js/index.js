var ProductNameInput= document.getElementById("ProductName")
var ProductPriceInput= document.getElementById("ProductPrice")
var ProductCategoryInput= document.getElementById("ProductCategory")
var ProductImageInput= document.getElementById("ProductImage")
var ProductDescInput= document.getElementById("ProductDesc")
var Add= document.getElementById("Add")
var Update= document.getElementById("Update")
var SearchInput= document.getElementById("SearchInput")
var Products=[]

if(localStorage.getItem("Products")!==null){
    Products=JSON.parse(localStorage.getItem("Products"))
    display()
}
function AddProduct()
{
    var Product={
        Code:ProductNameInput.value,
        Price:ProductPriceInput.value,
        Cate:ProductCategoryInput.value,
        Image:`./Images/${ProductImageInput.files[0]?.name}`,
        Desc:ProductDescInput.value
    }
    Products.push(Product)
    localStorage.setItem("Products",JSON.stringify(Products))
    ClearForm()
    display()
}
function ClearForm(){
        ProductNameInput.value=null
        ProductPriceInput.value=null
        ProductCategoryInput.value=null
        ProductDescInput.value=null
        ProductImageInput.value=null
    }
    function display(){
        var cartona=" "
        for(var i=0;i<Products.length;i++){
            cartona+= `
            <div class="item col-md-4 col-lg-3 col-xl-2">
          <div class="inner rounded-4">
            <h3 class="text-danger fs-3 fw-bolder text-center">${Products[i].Code}</h3>
            <h4 class="text-warning fs-4 fw-semibold text-center">${Products[i].Price}</h4>
            <h5 class="text-success fs-5 fw-normal text-center">${Products[i].Cate}</h5>
            <img src="${Products[i].Image}" alt="Samsung Phone">
            <h6 class="text-inf fs-6 fw-lighter text-center">${Products[i].Desc}</h6>
            <button onclick="deleteProduct(${i})" class="my-3 btn btn-outline-danger w-100">Delete<i class="fa-solid fa-trash"></i></button>    
            <button onclick="updateProduct(${i})" class="my-3 btn btn-outline-warning w-100">Update<i class="fa-solid fa-pen"></i></button>    
          </div>
        </div>   
            `
        }
        document.getElementById("items").innerHTML=cartona
    }
    function deleteProduct(A){
       Products.splice(A,1)
       localStorage.setItem("Products",JSON.stringify(Products))
       display()
    }
    
    var a;
    function updateProduct(i){
        a=i
        ProductNameInput.value=Products[i].Code
        ProductPriceInput.value=Products[i].Price
        ProductCategoryInput.value=Products[i].Cate
        ProductDescInput.value=Products[i].Desc
        Add.classList.add("d-none")
        Update.classList.remove("d-none")
    }
    
    function updatesProduct(a){
       Products[a].Code=ProductNameInput.value
       Products[a].Price=ProductPriceInput.value
       Products[a].Cate=ProductCategoryInput.value
       Products[a].Desc=ProductDescInput.value
       display()
       localStorage.setItem("Products",JSON.stringify(Products)) 
       Add.classList.remove("d-none")
       Update.classList.add("d-none")
       ClearForm()
    }

    function Search(){
        var term=SearchInput.value;
        var cartona="";
        for(var i=0;i<Products.length;i++){
        if(Products[i].Code.toLowerCase().includes(term.toLowerCase())){
            cartona+= `
            <div class="item col-md-4 col-lg-3 col-xl-2">
            <div class="inner rounded-4">
            <h3 class="text-danger fs-3 fw-bolder text-center">${Products[i].Code}</h3>
            <h4 class="text-warning fs-4 fw-semibold text-center">${Products[i].Price}</h4>
            <h5 class="text-success fs-5 fw-normal text-center">${Products[i].Cate}</h5>
            <img src="./Images/download.webp" class="w-100" alt="Samsung Phone">
            <h6 class="text-inf fs-6 fw-lighter text-center">${Products[i].Desc}</h6>
            <button onclick="deleteProduct(${i})" class="my-3 btn btn-outline-danger w-100">Delete<i class="fa-solid fa-trash"></i></button>    
            <button onclick="updateProduct(${i})" class="my-3 btn btn-outline-warning w-100">Update<i class="fa-solid fa-pen"></i></button>    
            </div>
            </div>   
            `
        }  

        }
        document.getElementById('items').innerHTML=cartona
        
    }
    