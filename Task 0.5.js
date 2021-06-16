function semiperimeter (a, b, c){
    var s;

    s = 0.5 * (a + b + c);
    return s;
}

function getArea(x, y, z){
    var area;
    var semi = semiperimeter(x,y,z);

    area = Math.sqrt(semi * (semi - x) * (semi - y) * (semi - z));
    return area;
}

console.log(getArea(3, 4, 5));