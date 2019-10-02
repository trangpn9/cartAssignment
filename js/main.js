// Format currency
currencyFormat = (num) => {
    return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g)
}

// Function handle tax
funTax = (quanProduct, priceProduct) => {
    let valueTax = (parseInt(quanProduct) * parseInt(priceProduct) * 0.125);
    return Math.round(valueTax);
}

// Function check Discount
funCkDiscount = (valDis) => {
    if(isNaN(parseInt(valDis))){
        return valDis;
    }
    return 0;
}



// Set price + tax + total of product
document.getElementById("price-1").innerHTML = currencyFormat(120);
document.getElementById("discount-1").innerHTML = currencyFormat(25);

let setTax1 = funTax(parseInt(document.getElementById("quantity-1").value), parseInt(document.getElementById("price-1").innerHTML));
document.getElementById("tax-1").innerHTML = currencyFormat(setTax1);

let setTotal1 = parseInt(document.getElementById("quantity-1").value) * parseInt(document.getElementById("price-1").innerHTML) - parseInt(document.getElementById("discount-1").innerHTML) + parseInt(document.getElementById("tax-1").innerHTML);
document.getElementById("total-1").innerHTML = currencyFormat(setTotal1);

// -----
document.getElementById("price-2").innerHTML = currencyFormat(7);
document.getElementById("discount-2").innerHTML = currencyFormat(0);

let setTax2 = funTax(parseInt(document.getElementById("quantity-2").value), parseInt(document.getElementById("price-2").innerHTML));
document.getElementById("tax-2").innerHTML = currencyFormat(setTax2);

let setTotal2 = parseInt(document.getElementById("quantity-2").value) * parseInt(document.getElementById("price-2").innerHTML) - parseInt(document.getElementById("discount-2").innerHTML) + parseInt(document.getElementById("tax-2").innerHTML);
document.getElementById("total-2").innerHTML = currencyFormat(setTotal2);

// -----
document.getElementById("price-3").innerHTML = currencyFormat(120);
document.getElementById("discount-3").innerHTML = currencyFormat(25);

let setTax3 = funTax(parseInt(document.getElementById("quantity-3").value), parseInt(document.getElementById("price-3").innerHTML));
document.getElementById("tax-3").innerHTML = currencyFormat(setTax3);

let setTotal3 = parseInt(document.getElementById("quantity-3").value) * parseInt(document.getElementById("price-3").innerHTML) - parseInt(document.getElementById("discount-3").innerHTML) + parseInt(document.getElementById("tax-3").innerHTML);
document.getElementById("total-3").innerHTML = currencyFormat(setTotal3);


// Function handle Minus
funMinus = (getID) => {    
    let numID = getID[getID.length -1];
    let getValueQuantity = document.getElementById("quantity-" + numID).value;    
    if(getValueQuantity > 1){
        document.getElementById("quantity-" + numID).value = parseInt(getValueQuantity) - 1;  
        console.log(document.getElementById("quantity-" + numID).value);
    }
}

// Function handle Plus
funPlus  = (getID) => {
    let numID = getID[getID.length -1];
    let getValueQuantity = document.getElementById("quantity-" + numID).value;        
    document.getElementById("quantity-" + numID).value = parseInt(getValueQuantity) + 1;  
    console.log(document.getElementById("quantity-" + numID).value);
    
}

// Function handle remove product
funRemove = (getID) => {
    let numID = getID[getID.length -1];  
    document.getElementById("product-" + numID).remove();
}

// Function handle set Total
funTotalPrice = () => {    
    let c = document.getElementsByClassName("item-product").length;
    let setTotalPrice = 0;
    for (let i = 1; i <= c; i++){
        setTotalPrice += parseInt(document.getElementById("total-" + i).innerHTML); 
    }
    document.getElementById("bigTotalPrice").innerHTML = currencyFormat(setTotalPrice);
    // console.log(setTotalPrice) ;

}

funTotalPrice();
