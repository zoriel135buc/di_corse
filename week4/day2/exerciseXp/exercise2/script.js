<<<<<<< HEAD
function calculateTip() {
    let amount=prompt("what is the amount of the bill?")
    let tipPrice
    if (amount<50)tipPrice=0.2
    if(amount>50 && amount<200)tipPrice=0.15
    if(amount>200)tipPrice=0.1
    const tip=amount*(1+tipPrice)
    
        console.log("bill;",amount)
        console.log("total bill incluted tip:",tip);
}
=======
function calculateTip() {
    let amount=prompt("what is the amount of the bill?")
    let tipPrice
    if (amount<50)tipPrice=0.2
    if(amount>50 && amount<200)tipPrice=0.15
    if(amount>200)tipPrice=0.1
    const tip=amount*(1+tipPrice)
    
        console.log("bill;",amount)
        console.log("total bill incluted tip:",tip);
}
>>>>>>> 379a1cdbe8378079caf73d6115b436c9795c6cc3
calculateTip()