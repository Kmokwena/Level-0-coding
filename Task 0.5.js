function semiperimeter (a, b, c){
    let sum;

    sum = 0.5 * (a + b + c);
    return sum;
}

function getArea(x, y, z){
    let area;
    let semi = semiperimeter(x,y,z);

    area = Math.sqrt(semi * (semi - x) * (semi - y) * (semi - z));
    return area;
}

console.log(getArea(3, 4, 5));