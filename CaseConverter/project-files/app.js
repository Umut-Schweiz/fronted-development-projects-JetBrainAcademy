
const upperCaseButton = document.getElementById("upper-case");
const lowerCaseButton = document.getElementById("lower-case");
const properCaseButton = document.getElementById("proper-case");
const sentenceCaseButton = document.getElementById("sentence-case");
const saveTextFileButton = document.getElementById("save-text-file");
const textWords = document.querySelector("#text");

let newTextWords;

const getTextByArrayWithLowerCase = () => {
    newTextWords = textWords.value.toLowerCase().trim().split(' ');// creating an array all word after space
}

const toUpperFirstLetterOfString = (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
}

const upperCaseAllText = () => {
    newTextWords = textWords.value.toUpperCase().trim().split(' '); 
    textWords.value = newTextWords.join(' '); // this join() method creates and returns a new string by concatenating all of the elements in an array
}

const lowerCaseAllText = () => {
    getTextByArrayWithLowerCase()
    textWords.value = newTextWords.join(' ');
}

const properCaseAllText = () => {

    getTextByArrayWithLowerCase()

    for (let i = 0; i < newTextWords.length; i++) {
        newTextWords[i] = toUpperFirstLetterOfString(newTextWords[i]);
    }

    textWords.value = newTextWords.join(' ');
}

const sentenceCaseAllText = () => {

    newTextWords = textWords.value.toLowerCase().trim().split('. ');

    for (let i = 0; i < newTextWords.length; i++) {
        newTextWords[i] = toUpperFirstLetterOfString(newTextWords[i]);
    }

    textWords.value = newTextWords.join('. ');
}

upperCaseButton.addEventListener("click", upperCaseAllText)
lowerCaseButton.addEventListener("click", lowerCaseAllText)
properCaseButton.addEventListener("click", properCaseAllText)
sentenceCaseButton.addEventListener("click", sentenceCaseAllText)


saveTextFileButton.addEventListener("click", function () {

    newTextWords = textWords.value;
    console.log(newTextWords)

    // Start file download.
    download("text.txt", newTextWords);

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



