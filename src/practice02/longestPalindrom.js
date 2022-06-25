// bir stringdeki en uzun palindromu bulan fonksşyon
// örnek palindromlar
// aca
// 12345678987654321

function longestPalindrom(text){
    let textArray = text.split("")
    let tempArray=[]
    let str1
    let str2
    let palindrom =""
    for(let i=0;i<textArray.length-1;i++){
        tempArray=[]
        tempArray.push(textArray[i])
        for(let j=i+1;j<textArray.length-1;j++){
            tempArray.push(textArray[j])
            str1=tempArray.join("")
            str2=tempArray.reverse().join("")
            tempArray.reverse()
            if(str1==str2 && palindrom.length<str1.length){
                palindrom=str1
                //console.log(str1)
            }
        }
    }
    return palindrom
}


console.log(longestPalindrom("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 
console.log(longestPalindrom("abracadabra"));









