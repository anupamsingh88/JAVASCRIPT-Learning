const items = [250,645,300,900,50];

for(let i = 0; i < items.length; i++){
    let disc= items[i]/10;
    items[i] = items[i] - disc;
}

console.log(`Items after 10% discount are\n ${items}`);
