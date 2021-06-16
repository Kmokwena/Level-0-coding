function getMax(a, b, c){
    var max;

    max = a;
    if (max < b)
        max = b;
    if (max < c)
        max = c;
        
    /** This is the BONUS! */
    // var i = 0;
    // max = arguments[0];
    // while (arguments[i]){
    //     if (max < arguments[i])
    //         max = arguments[i];
    //     i++
    // }
    return max;
}

console.log(getMax(3, 1, 2, 5, 8, 3));