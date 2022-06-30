// iki dizi içerisinden ortak elemanlar hariç yeni bir dizi oluşutran fonksiyon



function unique([firstArray,secondArray]){
    let uniqueArray=[]
    firstArray.forEach(element => {
        if(!secondArray.includes(element)){
            console.log(element)
            delete secondArray[secondArray.indexOf(element)]
            uniqueArray.push(element)
            console.log(secondArray)
        }
        uniqueArray.concat(secondArray)
    });
    return uniqueArray
}
console.log(unique([[5,9,6],[7,8,9]]))

