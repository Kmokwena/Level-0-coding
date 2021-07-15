function commonLetters(string1, string2){
    const array1 = string1.split('');
    const array2 = string2.split('');
    let common = [];

    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) >= 0) {
            common.push(array1[i]);
        }        
    }

    console.log("Common letters: " + common);
}

commonLetters("computers", "house");
