function calcTip(bill) {
    let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
}

// Test Data
calcTip(275);  
calcTip(40);   
calcTip(430);  
