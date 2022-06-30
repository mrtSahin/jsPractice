// insertion sort
// https://www.geeksforgeeks.org/insertion-sort/?ref=lbp

let array=[7,8,5,2,2,9,7,5,62,4,1,3,4,6,3]

const swap=(array,i,j)=>{
    let temp=array[i]
    array[i]=array[j]
    array[j]=temp
    return array
}

for(let i=0;i<array.length;i++){
    if(array[i]>array[i+1]){
        swap(array,i,i+1)
        for(let j=i;j>0;j--){
            if(array[j-1]>array[j]){
                swap(array,j,j-1)
            }
        }
    }
}
console.log(array)