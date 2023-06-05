function isLeap(year) {

    if (year%4 == 0 && year%400 == 0 && year%100 == 0 ) {
        console.log("leap year.")
    } 
     else if (year%4 == 0 && year%100 == 0 ) {
        console.log("not leap year.")
    } else console.log("not leap year")
     

   
}
    
isLeap(1948)

