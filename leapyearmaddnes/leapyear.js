function isLeap(year) {

if (year%4 == 0 && year%400 == 0 || year%4 == 0) {
    console.log("Leap year.")

} else  console.log("Not leap year.")  
    

}

isLeap(1800);
