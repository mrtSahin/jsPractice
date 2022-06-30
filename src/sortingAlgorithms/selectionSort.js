// selection sort
// https://www.geeksforgeeks.org/selection-sort/?ref=lbp

let array=[2,0,6,7,4,9,1,8,5]

const swap=(array,i,j)=>{
    let temp=array[i]
    array[i]=array[j]
    array[j]=temp
    return array
}

for(let i=0;i<array.length;i++){
    let index=i
    for(let j=i+1;j<array.length;j++){
        if(array[i]>array[j]&&array[j]<array[index]){
            index=j
        }
    }
    swap(array,i,index)
}

console.log(array)