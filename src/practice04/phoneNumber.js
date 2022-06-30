// dizi içerisineki sayıları telefon numarası şeklinde yazan fonksion

function phone(str){
    let array=str.split("")
    return array.slice(0,4).join("")+"-"+array.slice(4,7).join("")+"-"+array.slice(7,11).join("")
}

console.log(phone("05555555555"))