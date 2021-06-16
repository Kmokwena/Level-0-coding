function checkVowel(str){
    var i = 0;
    var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

}

function isVowel(c){
    if (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u')
        return true;

    return  false;
}

function uniqueArray(array) {
    i = 0;
    var unique = [];
    while (array[i]){
        if (unique.indexOf(array[i]) < 0)
            unique.push(array[i]);
        i++;
    }
    return unique;
}

function checkVowel2(str){
    str = String(str).toLowerCase();

    var vowels = [];
    var i = 0;
    while (str[i]) {
        if (isVowel(str[i]))
            vowels.push(str[i]);
        i++;
    }
    
    var string  = uniqueArray(vowels).join(", ")
    

    console.log(string);
}

checkVowel2("Umuzi")