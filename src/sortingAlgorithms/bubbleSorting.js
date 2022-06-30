// bubble sorting algoritması
// https://www.geeksforgeeks.org/bubble-sort/


let array=[5,8,6,3,5,8,7,9,1,2,7,4]

const swap=(array,i,j)=>{
    let temp=array[i]
    array[i]=array[j]
    array[j]=temp
    return array
}

for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[j]>array[j+1]){
            array=swap(array,j,j+1)
        }
    }
}
console.log(array)
