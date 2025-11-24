const nums = [2, 8, 4, 7, 12, 87];

console.log(nums);

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const numeriPari = nums.filter(function (numero) {

    if (numero % 2 === 0) {
        return true
    };

return false;

})

console.log("il nuovo array numeri pari è :", numeriPari);


