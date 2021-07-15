function getMax(a, b, c){
    let max;

    max = a;
    if (max < b)
        max = b;
    if (max < c)
        max = c;
        
    /** This is the BONUS! */
    
    let i = 0;
    max = arguments[0];
    while (arguments[i]){
        if (max < arguments[i])
            max = arguments[i];
        i++
    }
    return max;
}

console.log(getMax(100, 1001, 102));