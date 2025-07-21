const palindromes = function (palin) {
    function strippedWord (str) {
        return str
            .toLowerCase()
            .replaceAll(' ', '')
            .replace(/[.,{}[\];':"\\|–=_+()&*%^#$!@`~?\/]/g, '')
    };
    let allOneWord = strippedWord(palin);
    function wordReversal(str) {
    let reversedWord = '';
        for (let i = str.length-1; i >= 0; i--) {
            reversedWord += str[i];
        }
        return reversedWord;
    };

    if (allOneWord === wordReversal(allOneWord)) {
        return true;
    }
    else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
