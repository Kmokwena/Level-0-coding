function isVowel(strin){
    if (strin === 'a' || strin === 'e' || strin === 'i' || strin === 'o' || strin === 'u')
        return true;

    return  false;
}

function uniqueArray(arr) {
    let i = 0;
    let unique = [];
    while (arr[i]){
        if (unique.indexOf(arr[i]) < 0)
            unique.push(arr[i]);
        i++;
    }
    return unique;
}

function checkVowel(str){
    str = String(str).toLowerCase();

    let vowels = [];
    let i = 0;
    while (str[i]) {
        if (isVowel(str[i]))
            vowels.push(str[i]);
        i++;
    }
    
    const checker  = uniqueArray(vowels).join(",");
    

    console.log("Vowels: " + checker);
}

checkVowel("Umuzi")