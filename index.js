fetch('./hardwordlist.json')
    .then((response) => response.json())
    .then((json) => {
        wordlist = json.toLocaleString();
    });

let wordlist;
let letter1 = document.getElementById("letter1");
let letter2 = document.getElementById("letter2");
let letter3 = document.getElementById("letter3");
let letter4 = document.getElementById("letter4");
let letter5 = document.getElementById("letter5");
let greyLetters = document.getElementById("greyLetters")
let answerSection = document.getElementById("answerSection")

function run(strInput) {
    let replaceGreyLetters = new RegExp('[' + greyLetters.value + ']', 'g');
    letter1.value = letter1.value.replace(replaceGreyLetters, "");
    letter2.value = letter2.value.replace(replaceGreyLetters, "");
    letter3.value = letter3.value.replace(replaceGreyLetters, "");
    letter4.value = letter4.value.replace(replaceGreyLetters, "");
    letter5.value = letter5.value.replace(replaceGreyLetters, "");
    strInput.value = strInput.value.toLowerCase();

    let regex = new RegExp(`[${letter1.value}][${letter2.value}][${letter3.value}][${letter4.value}][${letter5.value}]`, 'g');
    let answers = wordlist.match(regex);

    answerSection.innerHTML = "";

    if (answers == null) {
        answerSection.innerHTML = `There are 0 possibilities.`;
        return;
    }

    if (answers.length <= 150) {
        for (let i = 0; i < answers.length; i++) {
            answerSection.innerHTML += "<div>" + answers[i] + "</div>";
        }
    } else {
        answerSection.innerHTML = `There are ${answers.length} possibilities.`;
    }

}