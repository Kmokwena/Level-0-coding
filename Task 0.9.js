function isVowel(c){
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
        return true;

    return  false;
}

function uniqueArray(arr) {
    i = 0;
    var unique = [];
    while (arr[i]){
        if (unique.indexOf(arr[i]) < 0)
            unique.push(arr[i]);
        i++;
    }
    return unique;
}

function checkVowel(str){
    str = String(str).toLowerCase();

    var vowels = [];
    var i = 0;
    while (str[i]) {
        if (isVowel(str[i]))
            vowels.push(str[i]);
        i++;
    }
    
    var check  = uniqueArray(vowels).join(",");
    

    console.log("Vowels: " + check);
}

checkVowel("Umuzi")