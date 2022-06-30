// bir girdinin dizi olup olmadığını kontrol eden fonksiyon


const isArray = function(input){
    if(toString.call(input) === "[object Array]"){
        return true
    }
    return false
}
const isArray2=function(input) {
    if(Array.isArray(input)){
        return true
    }
    return false
}

console.log(isArray([44,8,6,"ık","ukl",9]))
console.log(isArray("cümle"))
console.log(isArray2("roıdjoı"))
console.log(isArray2([44,8,6,"ık","ukl",9]))