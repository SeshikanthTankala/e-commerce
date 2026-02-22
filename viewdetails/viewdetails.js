// ViewDetails.js
// when view details is clicked the clicked content should loaded on another page so using "DOMContentLoaded" funtion, callback funtion will works when content is loaded 

document.addEventListener("DOMContentLoaded",()=>{
    let productDetails = document.getElementById("product_details");
    // JSON.parse() used to convert JSON string into JS object  because we are receiving data from local storage
    let allProducts=JSON.parse(localStorage.getItem("allproducts")); //allproducts is key name which we given while creating local storage in main.js
    let productId=localStorage.getItem("productId"); //same as above line we setted id in localstorage, getItem() used to get data from local storage

    if(allProducts && productId){ //checking weather allproducts and productId have data or not
        let selectedProduct = allProducts.find((v)=> v.id==productId); //find() we used because we need to find data of the clicked item, by matching of clicked item id and id from allproducts data we get exact data of clicked item
        console.log(selectedProduct); //selected prod have only clicked item data
        if(selectedProduct){ //again checking clicked item(matched id item) have data or not
            productDetails.innerHTML=`
                <main>
                    <div class="main_items" id="view_details_container">
                        <span id="product_details_img">
                            <img src="${selectedProduct.thumbnail}" alt="${selectedProduct.title} image" />
                        </span>
                        <span id="product_details_info">
                            <h2>${selectedProduct.title}</h2>
                            <p><strong>Brand :</strong> ${selectedProduct.brand}</p>
                            <p><strong>Category :</strong> ${selectedProduct.category}</p>
                            <p><strong>Description :</strong> ${selectedProduct.description}</p>
                            <strong>Price :₹ ${Math.round(selectedProduct.price*90)}</strong>
                            <span>
                                ${selectedProduct.availabilityStatus==="In Stock" ? "<button id='add_to_cart'>Add to Cart</button>" : "Out Of Stock"}
                                <button id="back_to_home">Back to Home</button>
                            </span>
                        </span>
                    </div>
                    <div class="main_items" id="product_details_reviews_container">
                        <h3>Customers Ratings & reviews :</h3>
                        ${reviews(selectedProduct.reviews)}
                    </div>
                </main>
                `;
                document.getElementById("back_to_home").addEventListener("click",()=>{
                    window.location.href="../Home/home.html";
                })
                document.getElementById("add_to_cart").addEventListener("click",()=>{
                    addToCart(selectedProduct)
                })
        }
        else{
            productDetails.innerHTML=`<p>Product not found.</p>`;
        }
    }
    else{
        productDetails.innerHTML=`<p>No product details found.</p>`;
    }
})

function reviews(review){
    return review.map((r)=>`<div>
                        <p>${'❤️'.repeat(r.rating)}${'🖤'.repeat(5 - r.rating)}</p>
                        <p>${r.comment}</p>
                        <p>By <strong>${r.reviewerName}</strong> On ${Date(r.date)}</p>
                    </div>`
).join('')}

function addToCart(product){
    let cart= JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product)
    localStorage.setItem("cart",JSON.stringify(cart))
    alert("Product added Successfully...")
}

//when we click view details the id is given to local storage for matching it for further next page 
// so we have allprod details and id of clicked item in our local storage , we use both in this page and and match ids to get tht clicked item data from allproducts data
















// do CSS style for above code as given in pic u can modify code by your flexibility

/*
${selectedProduct.reviews.map((r)=>`   
                                    <div>
                                        <p>${r.rating}</p>
                                        <p>${'❤️'.repeat(r.rating)+'🖤'.repeat(5 - r.rating)}</p>
                                        <p>${r.comment}</p>
                                        <p>By <strong>${r.reviewerName}</strong> On ${Date(r.date)}</p>
                                    </div>
                                    `
                                    )}
*/