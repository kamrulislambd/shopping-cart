function updateNumber(product, price, isIncreasing){
    let productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing){
        productNumber = parseInt(productNumber) + 1;
    } else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    //Update Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;

    calculateTotal();

}

function getInput(product){
    let productInput = document.getElementById(product + '-number');
    let productNumber = parseInt(productInput.value);
    return productNumber;

}

function calculateTotal(){
    let phoneTotal = getInput('phone') * 1219;
    let caseTotal = getInput('case') * 59;
    let subTotal = phoneTotal + caseTotal;
    let tax = subTotal / 10;
    let totalAmount = subTotal + tax;
    
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;
}


//handler for phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', 
function(){
    updateNumber('phone', 1219, true);
})

document.getElementById('phone-minus').addEventListener('click', 
function(){
    updateNumber('phone', 1219, false);
})


//handler for case increase decrease events
document.getElementById('case-plus').addEventListener('click', 
function(){
    updateNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click',
function(){
    updateNumber('case', 59, false);
})