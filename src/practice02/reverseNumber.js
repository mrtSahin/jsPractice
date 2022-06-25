// bir sayıyı tersine çeviren fonksiyon


function reverseNumber(number){
    let num=number.toString()
    let numberArray = num.split("")
    numberArray.reverse()
    return numberArray.join("")
}

console.log(reverseNumber(562))