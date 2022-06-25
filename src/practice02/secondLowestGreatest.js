// dizideki en küçük ikincive en büyük ikinci sayıları bulan fonksiyon

function secondLG(array){
    array.sort((a,b)=>a-b)
    return `${array[1]}, ${array[array.length-2]}`
}

let array = [5,85,6,2,9,6]
console.log(secondLG(array))