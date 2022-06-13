/** 
 *  arkadaş sayılar: 
 * İki sayı birbirinin kendisi hariç 
 * bölenleri toplamına eşitse bu sayılara arkadaş sayılar denir.
 * Örnek: 220 ve 284
 * 220 : 1 + 2 + 4 + 5 + 10 + 11 + 20 + 22 + 44 + 55 + 110 = 284 
 * 284 : 1 + 2 + 4 + 71 + 142 = 220 */



 let areFriends = function (number1,number2){
    let sum1=findDivisors(number1)
    let sum2=findDivisors(number2)

    if(sum1==number2 && sum2==number1){
        console.log(number1+" ve "+number2+" arkadaş sayılardır")
    }else{
        console.log(number1+" ve "+number2+" arkadaş sayı DEĞİLLERDİR")
    }
}


let findDivisors = function (number) {
    let divisors=[]
    let sum=0
    for (let i=1 ; i<number;i++){
        if(0 == number%i){
            divisors.push(i)
            sum+=i
        }
    } 
    console.log(divisors)
    return sum
}


areFriends(69615,87633)