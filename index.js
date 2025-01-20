const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(batteries);

function batteries(accum, element){
    return accum + element;
}

console.log(totalBatteries);