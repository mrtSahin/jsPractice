// öğrencilerin not ortalmasını hesaplayan program

// <60	 F
// <70	 D
// <80	 C
// <90	 B
// <100  A

const students=[
    {isim:'David',puan:100},
    {isim:'Vinoth',puan:59},
    {isim:'Divya',puan:88},
    {isim:'Ishitha',puan:100},
    {isim:'Thomas',puan:83}
]
const marks=[[60,"F"],[70,"D"],[80,"C"],[90,"B"],[100,"A"]]
const mapMarks=new Map(marks)
let averageMark=0
let total=0
let grade=""

for(const student of students){
    total+=student.puan
}
averageMark=total/students.length
console.log(averageMark)

for(let i=100;i>=60;i-=10){
    if(averageMark<i){
        grade=mapMarks.get(i)
    }
}
console.log(grade)