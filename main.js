const firstMinusBtn = document.getElementById("firstMinusBtn");
const firstPlusBtn = document.getElementById("firstPlusBtn");
const firstInput = document.getElementById("firstInput");

firstPlusBtn.addEventListener("click",function(){
    const prevValue = firstInput.value;
    const newValue = parseInt(prevValue) + 1;
    firstInput.value = newValue;
    
    const firstTotalValue = document.getElementById("firstTotalValue");
    const unitPrice = 15000;
    const newTotalValue = newValue * unitPrice;
    firstTotalValue.innerText = newTotalValue;
    
    const secondTotalValue = document.getElementById('secondTotalValue');
    const subtotal = parseInt(firstTotalValue.innerText) + parseInt(secondTotalValue.innerText);
    document.getElementById("totalCost").innerText = subtotal;
    
    const texRate = 15;
    const totalCost = document.getElementById("totalCost");
    const totalTax = document.getElementById("totalTax");
    const total = document.getElementById("total");

    const tax = parseInt(totalCost.innerText) * texRate / 100;
    totalTax.innerText = tax;
    total.innerText = parseInt(totalCost.innerText) + tax;
})

firstMinusBtn.addEventListener("click",function(){
    const nextValue = firstInput.value;
    const newValue = parseInt(nextValue) - 1;
    firstInput.value = newValue;
    
    const firstTotalValue = document.getElementById("firstTotalValue");
    const unitPrice =  15000;
    const newTotalValue = newValue * unitPrice;
    firstTotalValue.innerText = newTotalValue;
    
    const secondTotalValue = document.getElementById('secondTotalValue');
    const subtotal = parseInt(firstTotalValue.innerText) + parseInt(secondTotalValue.innerText);
    document.getElementById("totalCost").innerText = subtotal;
    
    const texRate = 15;
    const totalCost = document.getElementById("totalCost");
    const totalTax = document.getElementById("totalTax");
    const total = document.getElementById("total");

    const tax = parseInt(totalCost.innerText) * texRate / 100;
    totalTax.innerText = tax;
    total.innerText = parseInt(totalCost.innerText) + tax;
})

const secondPlusBtn = document.getElementById('secondPlusBtn');
const secondMinusBtn = document.getElementById('secondMinusBtn');
const secondInput = document.getElementById('secondInput');

secondPlusBtn.addEventListener("click",function(){
    const prevValue = secondInput.value;
    const newValue = parseInt(prevValue) + 1;
    secondInput.value = newValue;
    
    const secondTotalValue = document.getElementById("secondTotalValue");
    const unitPrice = 100;
    const newTotalValue = newValue * unitPrice;
    secondTotalValue.innerText = newTotalValue;
    
    const firstTotalValue = document.getElementById("firstTotalValue");
    const subtotal = parseInt(firstTotalValue.innerText) + parseInt(secondTotalValue.innerText);
    document.getElementById("totalCost").innerText = subtotal;
    
    const texRate = 15;
    const totalCost = document.getElementById("totalCost");
    const totalTax = document.getElementById("totalTax");
    const total = document.getElementById("total");

    const tax = parseInt(totalCost.innerText) * texRate / 100;
    totalTax.innerText = tax;
    total.innerText = parseInt(totalCost.innerText) + tax;
})

secondMinusBtn.addEventListener("click",function(){
    const nextValue = secondInput.value;
    const newValue = parseInt(nextValue) - 1;
    secondInput.value = newValue;
    
    const secondTotalValue = document.getElementById('secondTotalValue');
    const unitPrice = 100;
    const newTotalValue = newValue * unitPrice;
    secondTotalValue.innerText = newTotalValue;
    
    const firstTotalValue = document.getElementById("firstTotalValue");
    const subtotal = parseInt(firstTotalValue.innerText) + parseInt(secondTotalValue.innerText);
    document.getElementById("totalCost").innerText = subtotal;
    
    const texRate = 15;
    const totalCost = document.getElementById("totalCost");
    const totalTax = document.getElementById("totalTax");
    const total = document.getElementById("total");

    const tax = parseInt(totalCost.innerText) * texRate / 100;
    totalTax.innerText = tax;
    total.innerText = parseInt(totalCost.innerText) + tax;
})

