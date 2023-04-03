let http = new XMLHttpRequest()

http.open('get','products.json',true);

http.send();



http.onload = function(){

    if(this.readyState === 4 && this.status == 200){
        let products = JSON.parse(this.responseText)
        let output = "";

        for(let item of products){
            output += `
            <div class = "product">
                <img src = "${item.image}"alt = "${item.image}">
                <p class = "title">${item.name}</p>
                <p class = "description">
                    ${item.description}
                </p>
                <p class = "price">
                <span>${item.price}</span>
                </p>

                <p class = "collection">${item.collection} </p>
                <button type=button class = "btn btn-secondary"> Comprar </button>
                

            
            </div>
            
            
            
            `
        }

        document.querySelector(".products").innerHTML = output;


    }


}