function commonLetters(str1, str2){
    var array1 = str1.split('');
    var array2 = str2.split('');
    var common = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) >= 0) {
            common.push(array1[i]);
        }        
    }

    return common;
}

console.log(commonLetters("computer", "house"));