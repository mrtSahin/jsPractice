

//13.06.2022

let findPrime=function(...numbers){
    let primeNumbers=[]  // asal sayıları ekleeceğimiz dizimiz
    for (let i = 0; i < numbers.length; i++) {
        let counter=true // kontolcümüz. eğer true ise asal, false ise asal değil olacak
        for(j=2; j<numbers[i]; j++){ // j = 2 den başlatıp sayının kendisine kadar artırıyoruz
            if (numbers[i]%j==0) { // eğer bir sayı kendisi ve 1 dan başka bir sayıya bölünüyorsa asal değildir.
                counter=false
                break
            }
        }
        if(counter && numbers[i]>1){  // 1 asal sayı olmadığında bunun haricindeki sayıları almayız
            primeNumbers.push(numbers[i])
        }
    }
    return primeNumbers
}

primes=findPrime(1,0,2,5,8,21,13,49,47)
console.log(primes)