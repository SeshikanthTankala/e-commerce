let product=[];

function fetchData(){
    fetch("https://dummyjson.com/products")
    // https://dummyjson.com/recipe
    .then(res=>res.json())
    .then(val=>{
        console.log(val.products);
        product=val.products;
        // JSON.stringify()  used to covert JS object to JSON string
        //setItem()  used to create key and value
        localStorage.setItem("allproducts",JSON.stringify(product))
        displayProduct(product);
    })
}

function displayProduct(prod){
    let output="";
    prod.map((val)=>{
        output +=`
            <main>
                <div>
                    <img src="${val.thumbnail}" alt="${val.title}" />
                </div>
                <h3>${val.title}</h3>
                <div id="product_details_container">
                    <h5>Rating : ${val.rating}⭐</h5>
                    <h5>Price : ₹${Math.round(val.price*90)}</h5>
                    <h5>InStock :  ${val.stock}</h5>
                    <button onclick="details(${val.id})" >Details</button>
                </div>
            </main>
        `;
    })
    document.getElementById("product_container").innerHTML=output;
}

document.getElementById("search_bar").addEventListener("input",function searchItem(event){
    let searchTerm=event.target.value.toLowerCase();
    let filteredProduct = product.filter((val)=>{
        return (
            val.title.toLowerCase().includes(searchTerm) || 
            val.category.toLowerCase().includes(searchTerm)

        );
    });
    displayProduct(filteredProduct);
})

// 28/1/2026 session code
function details(productId){
    console.log(productId);
    localStorage.setItem("productId",productId) //we are setting id of clicked item inside local storage
    window.location.href="../viewdetails/viewdetails.html"; //used to switch page when clicked
}
// above function is called inside the button of view details in onclick="details(val.id)"


fetchData();



// availabilityStatus
// : 
// "In Stock"
// brand
// : 
// "Essence"
// category
// : 
// "beauty"
// description
// : 
// "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula."
// dimensions
// : 
// {width: 15.14, height: 13.08, depth: 22.99}
// discountPercentage
// : 
// 10.48
// id
// : 
// 1
// images
// : 
// ['https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp']
// meta
// : 
// {createdAt: '2025-04-30T09:41:02.053Z', updatedAt: '2025-04-30T09:41:02.053Z', barcode: '5784719087687', qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'}
// minimumOrderQuantity
// : 
// 48
// price
// : 
// 9.99
// rating
// : 
// 2.56
// returnPolicy
// : 
// "No return policy"
// reviews
// : 
// (3) [{…}, {…}, {…}]
// shippingInformation
// : 
// "Ships in 3-5 business days"
// sku
// : 
// "BEA-ESS-ESS-001"
// stock
// : 
// 99
// tags
// : 
// (2) ['beauty', 'mascara']
// thumbnail
// : 
// "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
// title
// : 
// "Essence Mascara Lash Princess"
// warrantyInformation
// : 
// "1 week warranty"
// weight
// : 
// 4