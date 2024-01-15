let input=document.getElementById("inputfield")
let productItem=document.querySelectorAll(".product")
let form=document.getElementById("form")
let display=document.querySelector(".dispaly")
let h=document.getElementById("hi")
form.addEventListener("keyup",(e)=>{
    let inputfield=input.value.toUpperCase()
    productItem.forEach((products)=>{
 let productName=products.querySelector("h1")
 if(productName.textContent.toUpperCase().includes(inputfield)){
   products.style.display="block"
   products.style.display = "flex";
   
 }else{
   products.style.display="none"
   products.classList.remove("product")
 }})
})
   
   
      
      
productItem.forEach(products => {
  products.addEventListener("click", () => {
    input.value =products.querySelector("h1").innerHTML
  });
});

  