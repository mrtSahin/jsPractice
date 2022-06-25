// bir metin içersinde tekrar etmeyen karakteri veren fonksiyon


function notRepeat(text){
    let textArray=text.split("")
    let setText=new Set(textArray)
    let notRepeatChar=[]
    for(setChar of setText){
        let array=textArray.filter(char=> char==setChar)
        //console.log(array)
        if(array.length==1){
            notRepeatChar.push(array[0])
        }
    }
    return notRepeatChar.join(", ")
}

console.log(notRepeat("feeefeeh47cee"))