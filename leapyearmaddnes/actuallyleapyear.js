function isLeap(year) {
    // if (year%4 === 0){
    //    if (year%100 === 0 ) {
    //     if (year%400 === 0) {
    //         console.log("leap year.")
    //     } else console.log("Not leap year.")
    //    } else {
    //      console.log("leap year.")
    //    }
    // } else {
    //     console.log("Not leap year.")
    // }
    

    if (year%4 === 0) {
        if(year%100 === 0) {
            if(year%400 === 0) {
                console.log("Leap year.")
            } else {
                console.log("Not a leap year.")
            }
        } else {
            console.log("Leap year.")
        }
    } else {
        console.log("Not leap year.")
    }



}
    isLeap(1948);

    console.log(isLeap)