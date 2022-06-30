// iki elemanlı bir dizi var. bu dizinin ilk elemanı da bir dizi. ikinci elemanı ise bir
// sayı. bu sayı dizinin içerisindeki dizinin ilk kaç tane elemanını döndüreceğimizi belirliyor.


const first = function(array){
    if(array[0][0]==null){
        return(array[0])
    }
    if(array[0].length<array[array.length-1]){
        return array[0]
    }
    return array[0].slice(0,array[1])
}
console.log(first([[4,8,62,9,87,62,6,47],5]))
console.log(first([[],4]))
console.log(first([[4,8,62,9,87,62,6,47],8]))
console.log(first([[4,8,62,9,87,62,6,47],26]))