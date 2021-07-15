function toHoursAndMin(num){
    let minutes;
    let hours;
    
    hours = Math.floor(num / 60);
    minutes = num % 60;

    if (hours === 1){
        hours = hours + " hour";
    }else{
        hours = hours + " hours";
    }

    if (minutes === 1){
        minutes = minutes + " minute"
    }else{
        minutes = minutes + " minutes"
    }

    return hours + ", " + minutes;
}

console.log(toHoursAndMin(1));