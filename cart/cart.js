//Cart.js
document.addEventListener("DOMContentLoaded",()=>{
    displayCart();
})

function displayCart(){
    let cart=JSON.parse(localStorage.getItem("cart")) || [];
    let cartContent=document.getElementById("cart_content");
    let totalPrice=document.getElementById("total_price");
    
    cartContent.innerHTML="";
    let totalBill=0;
    if(cart.length===0){
        cartContent.innerHTML=`<h1>Cart is Empty🥲...Start Shopping <button id="homePage">shop</button></h1>`;
        document.getElementById("homePage").addEventListener("click",()=>{
            window.location.href="../Home/home.html";
        });
        return;
    }
    cart.map((product,i)=>{
        totalBill += Math.floor((product.price)*90);
        console.log(product,i);

        let newProd = document.createElement("div");
        newProd.setAttribute("class","prod_items")
        newProd.innerHTML=`
            <span>  
                <img src=${product.thumbnail}  alt=${product.title}/>
            </span>
            <span>
                <h2>${product.title}</h2>
                <p><strong>Brand :</strong> ${product.brand}</p>
                <p><strong>Category :</strong> ${product.category}</p>
                <strong>Price :₹ ${Math.round(product.price*90)}</strong>
            </span>
            <button onclick="removeFromCart(${i})">Remove</button>
        `;
        cartContent.append(newProd)
        
    })
    totalPrice.innerHTML=`<p>Total Price :₹ <strong>${totalBill}</strong></p>`;

}

function removeFromCart(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index,1);
    console.log(cart);
    localStorage.setItem("cart",JSON.stringify(cart));
    displayCart();
}