
let upperCaseButton = document.getElementById("upper-case");
let lowerCaseButton = document.getElementById("lower-case");
let properCaseButton = document.getElementById("proper-case");
let sentenceCaseButton = document.getElementById("sentence-case");
let saveTextFileButton = document.getElementById("save-text-file");

let textWords;

const firstLetterToUpper = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

upperCaseButton.addEventListener("click", function () {
    textWords = document.getElementById("text").value.toUpperCase().trim().split(' ');
    document.getElementById("text").value = textWords.join(' ');

})

lowerCaseButton.addEventListener("click", function () {
    textWords = document.getElementById("text").value.toLowerCase().trim().split(' ');
    document.getElementById("text").value = textWords.join(' ');
})

properCaseButton.addEventListener("click", function () {
    textWords = document.getElementById("text").value.toLowerCase().trim().split(' ');

    for (let i = 0; i < textWords.length; i++) {
        textWords[i] = firstLetterToUpper(textWords[i]);
    }

    document.getElementById("text").value = textWords.join(' ');
})

sentenceCaseButton.addEventListener("click", function () {
    textWords = document.getElementById("text").value.toLowerCase().trim().split('. ');

    for (let i = 0; i < textWords.length; i++) {
        textWords[i] = firstLetterToUpper(textWords[i]);
    }

    document.getElementById("text").value = textWords.join('. ');
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

saveTextFileButton.addEventListener("click", function () {

    textWords = document.getElementById("text").value;
    console.log(textWords)

    // Start file download.
    download("text.txt", textWords);

})

