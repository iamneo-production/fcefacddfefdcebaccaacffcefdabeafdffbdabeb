function filterOdd(...numbers){
    return numbers.filter(num=>num%2!=0);
}
function filterEven(...numbers){
    return numbers.filter(num=>num%2==0);
}
function generateRandomList(n=7){
    return Array.from({length:n},()=>Math.floor((Math.random()*100)+1));
}

export {filterOdd, filterEven, generateRandomList};