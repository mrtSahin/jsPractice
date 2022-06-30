// 0'dan 15'e kadar yinelenecek bir döngü için JavaScript yazın. Her yineleme
// için mevcut sayının tek mi çift mi olduğunu kontrol edecek ve ekrana bir mesaj gösterecek.

for(let i=0;i<=15;i++){
    if(0==i%2) console.log(`${i} çift`)
    else console.log(`${i} tek`)
}