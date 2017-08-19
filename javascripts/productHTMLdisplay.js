"use strict";
console.log("productHTMLdisplay.js, Yo!");

let explosives = require("./JSONcalls.js");

$("nav").click((event) => {
    if (event.target.className === "dropdown-item"){
        // console.log("You clicked an item");
        let buttonID = event.target.id;
        let value = event.target.value;
        console.log(value);
        // console.log(buttonID);
        explosives.productInfo.length = 0;
        $('#content').empty();
        $('#content').html(`<h1>Our Available ${value}:</h1>`);
        explosives.loadProducts(buttonID).
        then((loadedProducts)=>{
            for (let obj in loadedProducts) {
                explosives.productInfo.push(loadedProducts[obj]);
            }
            // console.log(explosives.productInfo);
            return explosives.loadTypes();
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
        }).then((categories)=>{
            categories.forEach((item, index)=>{
                explosives.productInfo.forEach((element, position)=>{
                    if(item.id === explosives.productInfo[position].category){
                        explosives.productInfo[position].category_type = item.name;
                    }
                });
            });
        });

        // KEEP CODE THAT IS BASED ON SELECT VALUE HERE
        console.log(explosives.productInfo);


        // KEEP CODE THAT IS BASED ON SELECT VALUE HERE

    }
});

