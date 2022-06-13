// mükemmel sayı : kendisi hariç pozitif bölenlerinin toplamı kendisine eşit olan sayı

let findDivisors = function (number) {
    let divisors=[]
    let sum=0
    for (let i=1 ; i<number;i++){
        if(0 == number%i){
            divisors.push(i)
            sum+=i
        }
    } 
    //console.log(divisors)
    if(sum==number) return (number+" mükemmel sayıdır")
    else return (number+" mükemmel sayı değildir")
}

for(let i = 0 ; i<=1000;i++){
    console.log(findDivisors(i))
}
