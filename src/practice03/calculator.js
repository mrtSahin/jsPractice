// hesap makinesi

function topla(){
    let birinciSayi=parseInt(document.getElementById("birinciSayi").value)
    let ikinciSayi=parseInt(document.getElementById("ikinciSayi").value)
    document.getElementById("sonuc").innerHTML=birinciSayi+ikinciSayi
}

function cikar(){
    let birinciSayi=parseInt(document.getElementById("birinciSayi").value)
    let ikinciSayi=parseInt(document.getElementById("ikinciSayi").value)
    document.getElementById("sonuc").innerHTML=birinciSayi-ikinciSayi
}

function carp(){
    let birinciSayi=parseInt(document.getElementById("birinciSayi").value)
    let ikinciSayi=parseInt(document.getElementById("ikinciSayi").value)
    document.getElementById("sonuc").innerHTML=birinciSayi*ikinciSayi
}

function bol(){
    let birinciSayi=parseInt(document.getElementById("birinciSayi").value)
    let ikinciSayi=parseInt(document.getElementById("ikinciSayi").value)
    document.getElementById("sonuc").innerHTML=birinciSayi/ikinciSayi
}