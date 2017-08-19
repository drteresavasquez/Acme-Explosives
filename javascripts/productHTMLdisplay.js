"use strict";
console.log("productHTMLdisplay.js, Yo!");

//I am requiring the files that have the calls that I need to run the functions on the data. NOTE each of the calls need to have the variable assigned below . the item I am calling from the required file like on line 15.
let explosives = require("./JSONcalls.js");

//Listen on the nav element, which includes the dropdown I want to target
$("nav").click((event) => {
    if (event.target.className === "dropdown-item"){
        // console.log("You clicked an item");
        let buttonID = event.target.id;
        let value = event.target.value;
        // console.log(value);
        // console.log(buttonID);
        explosives.productInfo.length = 0;
        $('#content').empty();
        $('.row.justify-content-center').empty();
        $('#content').html(`<h1>Our Available ${value}:</h1>`);
        //load the data from firebase that matches the buttonID/type
        explosives.loadProducts(buttonID).

        //after loading, evaluate the objects and push to a new local array so that I can manipulate the structure and content of the object.
        then((loadedProducts)=>{
            for (let obj in loadedProducts) {
                explosives.productInfo.push(loadedProducts[obj]);
            }
            // console.log(explosives.productInfo);
            return explosives.loadTypes();

        //compare the product info type with the types imported from firebase and create a new key in the object named product_type. Give it the value of the name in the type data imported from firebase.    
        }).then((types)=>{
            types.forEach((item, index)=>{
                explosives.productInfo.forEach((element, position)=>{
                    if(item.id === explosives.productInfo[position].type){
                        explosives.productInfo[position].product_type = item.name;
                    }
                });
            });
            // console.log(explosives.productInfo);
            return explosives.loadCategories();


        //compare the product info category with the categories imported from firebase and create a new key in the object named category_type. Give it the value of the name in the category data imported from firebase.   
        }).then((categories)=>{
            categories.forEach((item, index)=>{
                explosives.productInfo.forEach((element, position)=>{
                    if(item.id === explosives.productInfo[position].category){
                        explosives.productInfo[position].category_type = item.name;
                    }
                });
            });

            explosives.productInfo.forEach((item, index) =>{
                let objectStuff = explosives.productInfo[index];
                console.log(objectStuff);
                console.log(objectStuff.id);
                $('.row').append(`<div class="fwCard col-md-3">
                <div class="prodName">${objectStuff.name}</div>
                <div class="prodDesc">Description: ${objectStuff.description}</div>
                <div class="prodType">Product Type: ${objectStuff.product_type}<br>Category: ${objectStuff.category_type}</div>
               </div>`
               );
               
            });
        });
    }
});

